import React, { Component } from 'react';
import Routes from './Routes/Routes';
//import Home from './Home/Home';
//import AboutUs from './AboutUs/AboutUs';
//import Portfolio from './Portfolio/Portfolio';
//import Team from './Team/Team';

class MainContainer extends Component {
  render() {
    
    let companyInfo = this.props.companyInfo
    return (
      <Routes companyInfo={companyInfo}/>
    );
  }
}

export default MainContainer;


// <div>
//   <h1>MainContainer Component</h1>
//   <Home />
//   <AboutUs companyInfo={companyInfo} />
//   <Team companyTeam={companyInfo.team} />
//   <Portfolio />
// </div>