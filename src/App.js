import React, { Component } from 'react';
import companyData from './companyData.json'
import './App.css';
//import Grid from 'material-ui/Grid';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import Footer from './Footer/Footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      companyData: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        companyData: companyData
      })
    }, 2000);
  }
  
  render() {
    let companyInfo = this.state.companyData.company
    companyInfo && console.log(companyInfo)
    let footerInfo = {
        name: companyInfo && companyInfo.name,
        logo: companyInfo && companyInfo.logo,
        contact: companyInfo && companyInfo.contactInformation
    }
    return (
      <div id ="page-wrapper">
        {companyInfo ? 
          <Header companyInfo={companyInfo} />          
          : <h1>Loading ...</h1>
        }
        {companyInfo &&
          <MainContainer companyInfo={companyInfo} />
        }
        {companyInfo &&
          <Footer footerInfo={footerInfo} />
        }
      </div>
    );
  }
}

export default App;
