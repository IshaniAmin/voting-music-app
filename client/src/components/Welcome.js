import React, { Component } from 'react';
import './Welcome.css';


class Welcome extends Component {
  render() {
    return (
      <div>

      	<center>
	      	<h1 id="welcomeHeader">Welcome</h1>
	      	<button type="button" className="btn"><a href="/home">Enter</a></button>
        </center>

      </div>
    );
  }
}

export default Welcome;
