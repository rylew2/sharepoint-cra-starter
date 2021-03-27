import { sp } from "@pnp/sp";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SampleRoute2 from "./routes/SampeRoute2";
import SampleRoute1 from "./routes/SampleRoute1";

export default class App extends Component {
  async componentDidMount() {
    let hostStr = "";
    if (process.env.NODE_ENV === "development") {
      //for local dev
      hostStr = process.env.REACT_APP_RELATIVE_URL;
    } else if (process.env.NODE_ENV === "production") {
      //for production build
      hostStr = process.env.REACT_APP_PROD;
    }

    sp.setup({
      ie11: true, //required for legacy IE11 API calls
      sp: {
        headers: {
          Accept: "appliation/json;odata=verbose", //set header to return json instead of xml
        },
        baseUrl: hostStr,
      },
    });

    // let spList = "MyTestList"; //rename to your own list

    // let items = await sp.web.lists
    //   .getByTitle(spList)
    //   .items.select("Id", "Title", "Description")
    //   .orderBy("Id")
    //   .get();
    // console.log(items ? items : "none");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sampleroute1" component={SampleRoute1} />
            <Route path="/sampleroute2" component={SampleRoute2} />
          </Switch>


          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            another link
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            another link
          </a> */}
        </header>
      </div>
    );
  }
}
