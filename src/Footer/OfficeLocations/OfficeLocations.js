import React, { Component } from 'react';
import OfficeLocation from './OfficeLocation/OfficeLocation'

class OfficeLocations extends Component {
  render() {
    return (
      <div>
        <h2>OfficeLocations Component</h2>
        <OfficeLocation />
        <OfficeLocation />
      </div>
    );
  }
}

export default OfficeLocations;