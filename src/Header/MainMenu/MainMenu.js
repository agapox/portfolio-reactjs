import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css'

class MainMenu extends Component {

  render() {  

    return(
      <div className={"main-menu"}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
        </ul>
      </div>
    );
  }

}

export default MainMenu;
