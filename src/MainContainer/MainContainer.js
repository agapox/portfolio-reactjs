import React, { Component } from 'react';
import companyData from '../companyData.json';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainContainer extends Component {

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
    
    return (
      <div>
        <Header companyInfo={companyData} />
        <div>
          <Routes />
        </div>
        <Footer companyInfo={companyData} />
      </div>
    );
  }
}

export default MainContainer;

