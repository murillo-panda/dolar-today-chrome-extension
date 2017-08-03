import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <div>
          <h1>Index Html</h1>
          <Link to="/hello">Go to Hello</Link>
          <br/>
          <Link to="/bye/1234">Go to Bye</Link>
      </div>
    );
  }
}
