import React, { Component } from 'react';
//import 'Projects.css';

class Projects extends Component {

  render() {
    let projects = this.props.projects
    //projects && console.log(projects)
    return (
      <div className={'project-container'}>
        <h2>Project Container</h2>
        {
          projects.map((item,index) => {
            console.log(item)
            return <h3 key={index}>{item.name}</h3>
          })
        }
      </div>
    );
  }
}

export default Projects;
