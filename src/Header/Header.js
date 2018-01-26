import React, { Component } from 'react';
import './Header.css';
import MainMenu from './MainMenu/MainMenu'

class Header extends Component {
  
  render() {
    let company = {
      name: this.props.companyInfo.name,
      logo: this.props.companyInfo.logo,
    }
    
    return (
      <div>
        <div>
          <img src={company.logo} alt=""/>
          <h3>{company.name}</h3>
          <div>
            <MainMenu />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;