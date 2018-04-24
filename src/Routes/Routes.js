import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../MainContainer/Home/Home';
import AboutUs from '../MainContainer/AboutUs/AboutUs';
import Portfolio from '../MainContainer/Portfolio/Portfolio';
import Team from '../MainContainer/Team/Team';
import PortfolioItemSum from '../Tools/Portfolio/PortfolioItemSum'

class Routes extends Component {
    
  render() {

    return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/team" exact component={Team} />
        <Route path="/portfolioitemsum" exact component={PortfolioItemSum} />
      </Switch>
    );
  }
};

export default Routes;

// Leer sobre React.cloneElement()
// Router es el elemento padre