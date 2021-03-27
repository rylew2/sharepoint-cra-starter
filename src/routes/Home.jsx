import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>App Home Page</h1>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link className="App-link" to="/sampleroute1">
              Route 1
            </Link>
          </li>
          <li>
            <Link className="App-link" to="/sampleroute2">
              Route 2
            </Link>
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
