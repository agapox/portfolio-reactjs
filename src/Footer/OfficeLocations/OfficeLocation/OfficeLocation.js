import React, { Component } from 'react';

class OfficeLocation extends Component {
  render() {
    let office = this.props.office
    office && console.log(office.email)
    let customStyle = {
      divStyle: {
        display: 'inline-block',
        margin: '0.5rem 2rem',
        width: '40%'
      },
      pStyle: {
        textAlign: 'justify'
      },
      innerDivStyle: {
        margin: '0 10%'
      },
      innerDivMapStyle: {
        margin: 'auto'
      },
      mapImg: {
        width: '100%'
      }
    }
    return (
      <div style={customStyle.divStyle}>
        <div style={customStyle.innerDivMapStyle}>
          <img style={customStyle.mapImg} src="https://snazzy-maps-cdn.azureedge.net/assets/1243-xxxxxxxxxxx.png?v=20170626083204" alt=""/>
        </div>
        <div style={customStyle.innerDivStyle}>
          <h4>{office.country} {office.name}</h4>
          <p style={customStyle.pStyle}>
            <i className="fa fa-map-marker" aria-hidden="true"> {office.address}, {office.city}, {office.state}</i>
          </p>
          <p style={customStyle.pStyle}>
            <i className="fa fa-phone" aria-hidden="true"> {office.phone.join(" / ")}</i>
          </p>
          <p style={customStyle.pStyle}>
            <i className="fa fa-envelope" aria-hidden="true"> {office.email.join(" / ")}</i>
          </p>
        </div>
      </div>
    );
  }
}

export default OfficeLocation;