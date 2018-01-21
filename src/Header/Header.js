import React, { Component } from 'react';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/Menu/MenuItem';
// import Button from 'material-ui/Button';

import './Header.css';

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
        </div>
      </div>
    );
  }
}
export default Header;