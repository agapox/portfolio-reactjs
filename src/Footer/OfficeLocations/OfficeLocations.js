import React, { Component } from 'react';
import OfficeLocation from './OfficeLocation/OfficeLocation'

class OfficeLocations extends Component {
  render() {
    let offices = this.props.companyLocation
    let customStyle = {
      divStyle: {
        margin: '1rem auto',
        textAlign: 'center'
      }
    }
    return (
      <div style={customStyle.divStyle}>
        <h2>Our Offices</h2>
        {
          offices.map((office,index) => {
            return <OfficeLocation key={index} office={office} />
          })
        }
      </div>
    );
  }
}

export default OfficeLocations;