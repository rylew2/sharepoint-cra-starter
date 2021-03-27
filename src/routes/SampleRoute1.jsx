import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";
export default class SampleRoute1 extends Component {
  render() {
    return (
      <div className="sampleroute1">
        <header className="sampleroute1-header">
          <h1>Sample Route 1</h1>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="App-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="App-link" to="/sampleroute2">
                Route 2
              </Link>
            </li>
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
