import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Portfolio from '../Portfolio/Portfolio';
import Team from '../Team/Team';

class Routes extends Component {
  render() {
    let companyInfo = this.props.companyInfo
    companyInfo && console.log(companyInfo)

    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home companyInfo={companyInfo} />
          </Route>
          <Route path="/about" exact>
            <AboutUs companyInfo={companyInfo} />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio companyPortfolio={companyInfo.portfolio} />
          </Route>
          <Route path="/team" exact>
            <Team companyTeam={companyInfo.team} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Routes;

// Leer sobre React.cloneElement()
// Router es el elemento padre