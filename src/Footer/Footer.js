import React, { Component } from 'react';
import SocialMedia from './SocialMedia/SocialMedia'
import FooterMenu from './FooterMenu/FooterMenu'
import CopyRights from './CopyRights/CopyRights'
import OfficeLocations from './OfficeLocations/OfficeLocations'


class Footer extends Component {
  render() {
    let company = this.props.footerInfo
    company && console.log(company)
    return (
      <div>
        <h1>Footer Component</h1>
        <OfficeLocations/>
        <SocialMedia />
        <FooterMenu />
        <CopyRights companyName={company.name} />
      </div>
    );
  }
}

export default Footer;
