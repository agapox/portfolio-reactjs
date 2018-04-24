import React, { Component } from 'react';
import projects from '../../../Behance/json/projects'
//import Client from './Client/Client';
import './Projects.css';
import Typography from 'material-ui/Typography';

class Projects extends Component {

  render() {
    return (
      <div className={'projects-container'}>
        {
          projects.map((project,index) => {
            //console.log(project)
            const name = project.project.name
            const fields = project.project.fields
            const tags = project.project.tags
            const cover = project.project.covers
            const images = project.project.modules
            return (
              <Project
                key={'projec-' + index}
                name={name}
                fields={fields}
                tags={tags}
                cover={cover}
                images={images} // modules
              />
            )
          })
        }
      </div>
    );
  }
}

export default Projects;

const Project = (props) => {
  const { name, fields, tags, cover, images } = props
  return (
    <div className={'project-'}>
      {name && <Typography variant="display1">{name}</Typography>}
      <p style={{fontWeight:'bold'}}>Industry</p>
      {fields && <p>{fields.join(', ')}</p>}
      {tags && <p>{tags.join(', ')}</p>}
      {cover && <img src={cover.original} alt="" />}
      <hr />
      {
        images &&
          images.map((image,index) => {
            //image.src && 
            //  console.log(image.src)
            return(
              image.src && 
                <img key={'img-det' + index} src={image.src} height="200" alt="" />
            )
          })
      }
      <hr />
      <button /*onclic abrir modal*/>See more</button>
    </div>
  )
}

/*
<modal>
  Galería de imágenes
</modal>
*/