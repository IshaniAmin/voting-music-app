import './Nav.css';
import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
          <NavLink exact to="/home">Home</NavLink>
          <NavLink to="/addsong">Add Song</NavLink>
          <NavLink to="/graph">Graph</NavLink>
        </nav> 
      </div>
    );
  }
}

export default Nav;