# SharePoint Create-React-App Solution Starter Kit

This repository serves as a starting point for all React SharePoint interactive solutions.
The goal is to establish consistency in solution UI design and team member skill sets.

## Project Structure

```
SHAREPOINT-CRA-STARTER
├── config
│   ├── private.json <-- manually update proxy info here
├── deploytools
├── proxyserver
├── public
├── src
├── .env <-- manually set project parameters
```

## Usage

### Setting up the project

#### Clone & Install packages

```
git clone https://github.com/rylew2/sharepoint-cra-starter.git
cd sharepoint-cra-starter
npm install
```

#### Configure proxy server:

A local development proxy server is **required** to connect to a **live SharePoint API** environment, circumventing _cross-domain_ issues (See reference diagram at the end).
To set up the proxy server:

```
npm run proxy
```

**On prompts**, use:

```
- On premise credentials (NTLM)
- Site Url: The url to the root of the site to connect to
  ex. http://my-sharepoint-site.com/sites/mysite
- Your normal windows ad-ent and password (password will be stored encrypted locally and on .gitignore)
```

#### Configurations

- rescripts to rename build folder outputs ( tilde to underscore )
- prettier
- eslint

### Development

**Restart the proxy server and the local web server.**

```
npm run startServers
```

### Deployment

**Deploy to UAT**

```
npm run deployUAT
```

**Deploy to PRODUCTION**

```
npm run deploy
```

Project folder are **_not_** viewable through SharePoint "Site Contents" page. To see the files, use SharePoint Designer or Windows Explorer.

---

#Reference

## Localhost Proxy:

![Diagram on how proxy server works to circumvent cross-domain call issues](/documentation/sharepoint-cra-starter.jpeg "Servers")
