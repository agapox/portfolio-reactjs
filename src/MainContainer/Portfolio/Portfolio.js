import React, { Component } from 'react';
import companyData from '../../companyData.json';
import Projects from './Projects/Projects'
import Clients from './Clients/Clients'

//<p>{companyIndustry.join(', ')}</p>

class Portfolio extends Component {

  constructor() {
    super()
    let whatToSee = 'clients'
    this.state = {
      companyData: '',
      togglePortfolio: true,
      whatToSee: whatToSee
    }
  }

  handleBtnClic() {
    //e.preventDefault()
    this.setState({
      togglePortfolio: !this.state.togglePortfolio,
      whatToSee: this.state.whatToSee === 'projects' ? 'clients' : 'projects'
    })
    console.log(this.state.togglePortfolio)
    console.log(this.state.whatToSee)
  }

  componentDidMount() {
    this.setState({
      companyData: companyData
    })
  }

  render() {
    const style = {
      title: {textAlign: 'center'}
    }
    let companyClients = companyData.company.clients
    //let companyIndustry = companyData.company.bussinesIndustry
    //companyClients && console.log(companyClients)
    //companyIndustry && console.log(companyIndustry)
    const { whatToSee } = this.state
    return (
      <div className={'portfolio-container'}>
        <h2 style={style.title}>Portfolio Component</h2>
        <div style={style.title}>
          <button onClick={() => this.handleBtnClic()}>See {whatToSee}</button>
        </div>
        { 
          whatToSee === 'clients' ? <Projects /> : <Clients clients={companyClients} />
        }
      </div>
    );
  }
}

export default Portfolio;
