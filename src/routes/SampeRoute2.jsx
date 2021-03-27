import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export default class SampeRoute2 extends Component {
  render() {
    return (
      <div className="sampleroute2">
        <header className="sampleroute2-header">
          <h1>Sample Route 2</h1>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="App-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="App-link" to="/sampleroute1">
                Route 1
              </Link>
            </li>
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
