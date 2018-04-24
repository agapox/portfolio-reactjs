import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import companyData from '../../companyData.json';
import PortfolioItemSum from '../../Tools/Portfolio/PortfolioItemSum';
import Team from '../Team/Team'
import GridListPortfolio from '../../Tools/GridListPortfolio/GridListPortfolio'

class Home extends Component {

  render() {
    let styles = {
      headings: {
        
      }
    }
    return (
      <div>
        <h2>Home Component</h2>
        <h1>
          {
            companyData ? companyData.company.name : "Loading ..."
          }
        </h1>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography children="Grid List Portfolio" align="center" variant="display2" gutterBottom />
          </Grid>
          <Grid item xs={12}>
            <GridListPortfolio />
          </Grid>
          <Grid item xs={12}>
            <Typography children="Portfolio" align="center" variant="display2" gutterBottom />
          </Grid>
          <Grid item xs={12}>
            <PortfolioItemSum />
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography children="Team" align="center" variant="display2" gutterBottom />
          </Grid>
          <Grid item xs={12}>
            <Team />
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography children="Clients" align="center" variant="display2" gutterBottom />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography children="Testimonials" align="center" variant="display2" gutterBottom />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
