import React, { Component } from 'react';
import companyData from '../../companyData.json';

class Home extends Component {

  render() {
    return (
      <div style={{background: '#245565'}}>
        <h2>Home Component</h2>
        <h1>
      {
        companyData ? companyData.company.name : "Loading ..."
      }
        </h1>
      </div>
    );
  }
}

export default Home;
