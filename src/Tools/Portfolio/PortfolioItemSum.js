import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import dataProjects from '../../Behance/json/projects'
import Grow from 'material-ui/transitions/Grow';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
const styles2 = {
  marginDiv: {
    margin: 'auto',
    padding: '0 2em'
  }
}

const PortfolioProjects = (props) => {
  //const { classes } = props
  let projects = dataProjects
  return(
    <div style={styles2.marginDiv}>
      <Grid container spacing={24}>
        {
          projects.map( (project,index) => {
            return(
              <Grid item key={`project-id-${project.project.id}`}  xs={12} sm={6} md={4} lg={3}>
                <Grow in={true} timeout={500+index*300}>
                  <PortfolioItemSum project={project.project} classes={props.classes} />
                </Grow>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default withStyles(styles)(PortfolioProjects);


const PortfolioItemSum = (props) => {
  const { classes } = props;
  const { project } = props

  //console.log(project)
  
  const styles = {
    projectItemSum: {
      //backgroundImage: `url("${project.covers[404]}")`,
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
      height: 'auto'
    },
    marginDiv: {
      margin: 'auto',
      padding: '0 2em'
    },
  }
  return (
    <Grid item style={styles.projectItemSum}>
      <Paper elevation={8} className={classes.paper}>
        <img src={project.covers[404]} width="100%"/>
        <Grid item xs={12}>
          <Typography children={project.name} variant="body2"/>
          <Typography children={project.fields.join(', ')} variant="body1"/>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Paper>
    </Grid>
  );
}

PortfolioItemSum.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(PortfolioItemSum);