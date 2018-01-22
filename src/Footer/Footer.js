import React, { Component } from 'react';
import SocialMedia from './SocialMedia/SocialMedia'
import FooterMenu from './FooterMenu/FooterMenu'
import CopyRights from './CopyRights/CopyRights'
import OfficeLocations from './OfficeLocations/OfficeLocations'


class Footer extends Component {
  render() {
    let company = this.props.footerInfo
    let mainMenu = this.props.mainMenu
    // company && console.log(company.contact)
    return (
      <div>
        <h1>Footer Component</h1>
        <OfficeLocations companyLocation={company.contact.offices}/>
        <SocialMedia companySocialMedia={company.contact.socialNetworks}/>
        <FooterMenu mainMenu={mainMenu} />
        <CopyRights companyName={company.name} />
      </div>
    );
  }
}

export default Footer;
