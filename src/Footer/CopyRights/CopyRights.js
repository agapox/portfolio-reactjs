import React, { Component } from 'react';

class CopyRights extends Component {
  render() {
    let companyName = this.props.companyName
    let currentYear = new Date()
    currentYear = currentYear.getFullYear()
    let customStyle = {
      alignCopyRights: {
        textAlign: 'center'
      }
    }

    return (
      <div style={customStyle.alignCopyRights}>
        <p>Copyrights &copy; {currentYear} {companyName}</p>
      </div>
    );
  }
}

export default CopyRights;