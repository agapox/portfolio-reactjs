import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
//import Routes from '../../routes'
//import Home from '../MainContainer/Home/Home'
// <Routes>
//   <Route>
//   </Route>
// </Routes>

class MainMenu extends Component {

  render() {  

    return(
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    );
  }

}

export default MainMenu;
