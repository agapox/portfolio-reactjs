import React, { Component } from 'react';
import SocialMedia from './SocialMedia/SocialMedia'
//import FooterMenu from './FooterMenu/FooterMenu'
import CopyRights from './CopyRights/CopyRights'
import OfficeLocations from './OfficeLocations/OfficeLocations'


class Footer extends Component {
  render() {
    let company = this.props.companyInfo.company
    //let mainMenu = this.props.mainMenu
    // company && console.log(company)
    return (
      <footer style={{background: '#28caff'}}>
        <h1>Footer Component</h1>
        <OfficeLocations companyLocation={company.contactInformation.offices}/>
        <SocialMedia companySocialMedia={company.contactInformation.socialNetworks}/>
        <CopyRights companyName={company.name} />
      </footer>
    );
  }
}

//<FooterMenu mainMenu={mainMenu} />
export default Footer;
