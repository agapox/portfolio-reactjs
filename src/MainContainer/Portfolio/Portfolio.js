import React, { Component } from 'react';
import companyData from '../../companyData.json';
import Clients from './Clients/Clients'

//<p>{companyIndustry.join(', ')}</p>

class Portfolio extends Component {

  constructor() {
    super()
    this.state = {
      companyData: ''
    }
  }
  componentDidMount() {
    this.setState({
      companyData: companyData
    })
  }

  render() {
    let companyClients = companyData.company.clients
    //let companyIndustry = companyData.company.bussinesIndustry
    //companyClients && console.log(companyClients)
    //companyIndustry && console.log(companyIndustry)
    return (
      <div className={'portfolio-container'}>
        <h2>Portfolio Component</h2>
        <Clients clients={companyClients} />
      </div>
    );
  }
}

export default Portfolio;
