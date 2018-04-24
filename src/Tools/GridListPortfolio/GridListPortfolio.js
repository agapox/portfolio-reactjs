import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
//import InfoIcon from '@material-ui/icons/Info';
import dataProjects from '../../Behance/json/projects'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes } = props;
  let newDataArr = []
  return (
    <div className={classes.root}>
      <GridList cellHeight={300}  cols={3}>
        {
          dataProjects.map( (el,index) => {
            el.project.modules.map( (image, index2) => {
              if (image.type === 'image') {
                newDataArr.push({
                  img: image.sizes.original,
                  name: el.project.name,
                  fields: el.project.fields.join(', ')
                })
              }
            })
          })
        }
        {
          newDataArr.map((el, index) => {
            return (
              <GridListTile key={index} cols={0}>
                <img src={el.img} alt={el.name} width="100%"/>
                <GridListTileBar
                  title={el.name}
                  subtitle={<p>{el.fields}</p>}
                />
              </GridListTile>
            )
          })
        }
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
