import React, { Component } from 'react';
//import FooterMenu from './FooterMenu/FooterMenu'
import OfficeLocations from './OfficeLocations/OfficeLocations'
import SocialNetworks from '../Tools/SocialNetworks/SocialNetworks';
import CopyRights from './CopyRights/CopyRights'


class Footer extends Component {
  render() {
    let company = this.props.companyInfo.company
    //let mainMenu = this.props.mainMenu
    // company && console.log(company)
    return (
      <footer style={{background: '#28caff'}}>
        <h1>Footer Component</h1>
        <OfficeLocations companyLocation={company.contactInformation.offices}/>
        <SocialNetworks socialNetworks={company.contactInformation.socialNetworks} iconSize={'fa-2x'}/>
        <CopyRights companyName={company.name} />
      </footer>
    );
  }
}

//<FooterMenu mainMenu={mainMenu} />
export default Footer;
