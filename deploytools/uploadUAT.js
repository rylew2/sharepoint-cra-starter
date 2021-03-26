/* Perform the following two steps */
// 1) Delete all files in /static/js folder
// 2) upload/overwrite all of the build folder to SharePoint

const { AuthConfig } = require("node-sp-auth-config");

const { Delete } = require("sppurge");

const spsave = require("spsave").spsave;
require("dotenv").config();

const authConfig = new AuthConfig({
  configPath: "./config/private.json",
  encryptPassword: true,
  saveConfigOnDisk: true,
});

const projectFolder = process.env.REACT_APP_PROJECT_TITLE;

authConfig
  .getContext()
  .then(({ siteUrl, authOptions: creds }) => {
    const ctx = {
      siteUrl,
      creds,
    };

    ctx.siteUrl = process.env.REACT_APP_UAT;
    console.log("========Deploying to UAT==================");

    const sppurge = new Delete();
    sppurge
      .deleteFolder(ctx, projectFolder + "/") //delete the whole folder
      .then((_) => console.log(projectFolder + " folder delete"))
      .then((_) => {
        const spsaveCoreOptions = {
          siteUrl: ctx.siteUrl,
          notification: true,
          checkin: true,
          checkinType: 2, //0=minor, 1=major, 2=overwrite
        };

        const spsaveFileOptions = {
          glob: [
            //files to be uploaded
            "build/*.!(json)", //everything in the build folder except json files (if SP disallows json) (manifest.json)
            "build/static/css/*.*",
            "build/static/js/*.*",
            "build/static/media/*.*",
          ],
          base: "build",
          folder: projectFolder, //destination folder
        };

        spsave(spsaveCoreOptions, ctx.creds, spsaveFileOptions).then((_) => {
          console.log("===========Files Uploaded==========");
        });
      });
  })
  .catch((err) => console.log(err.message));
