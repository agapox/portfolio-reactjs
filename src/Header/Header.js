import React, { Component } from 'react';
import './Header.css';
import MainMenu from './MainMenu/MainMenu'

class Header extends Component {
  
  render() {
    let company = {
      name: this.props.companyInfo.company.name,
      logo: this.props.companyInfo.company.logo,
    }
    
    return (
      <header>
        <div>
          <img src={company.logo} alt=""/>
          <h3>{company.name}</h3>
          <div>
            <MainMenu />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;