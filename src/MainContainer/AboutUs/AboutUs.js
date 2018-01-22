import React, { Component } from 'react';
// import Home from './Home/Home';
// import AboutUs from './AboutUs/AboutUs';
// import Portfolio from './Portfolio/Portfolio';

class AboutUs extends Component {
  render() {
    let aboutCompany = this.props.companyInfo
    aboutCompany && console.log(aboutCompany)
    let customStyle = {
      divStyle: {
        width: '90%',
        margin: 'auto'
      },
      innerDivStyle: {
        width: '70%',
        margin: '2rem auto',
        textAlign: 'center'
      },
      siteTitle: {
        textAlign: 'center'
      },
      siteSubTitle: {
        textAlign: 'center'
      },
      defaultParagraph: {
        textAlign: 'justify'

      }
    }
    return (
      <div style={customStyle.divStyle}>
        <div style={customStyle.innerDivStyle}>
          <h1 style={customStyle.siteTitle}>About Us</h1>
          <h3 style={customStyle.siteSubTitle}>{aboutCompany.aboutUs.overview}</h3>
        </div>
        {
          aboutCompany.aboutUs.story.split('.').map((story,index) => {
            return <p key={'our-story'+index} style={customStyle.defaultParagraph}>{story}.</p>
          })
        }
      </div>
    );
  }
}

export default AboutUs;
