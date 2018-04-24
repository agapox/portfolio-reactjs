import React, { Component } from 'react';
import './TeamMember.css';
import SocialNetworks from '../../../Tools/SocialNetworks/SocialNetworks';
//import MemberItem from '../../../Behance/Users'
// import Home from './Home/Home';
// import AboutUs from './AboutUs/AboutUs';
// import Portfolio from './Portfolio/Portfolio';

class TeamMember extends Component {

  constructor() {
    super()
    this.state = {
      memberItem: ''
    }
  }
  componentWillMount() {

  }

  render() {
    const { avatar, name, alias, position, skills, socialMedia } = this.props
    let customStyle = {
      divStyle: {
        display: 'inline-block',
        textAlign: 'center'
      },
      innerDivStyle: {
        margin: 0,
        padding: '1rem'
      },
      avatarMember: {
        width: '100%'
      },
      textStyle: {
        margin: '5px'
      },
      name: {
        margin: '5px', textAlign: 'center'
      },
      skills: {
        margin: '5px', fontSize: '12px'
      }, 
      alias: {margin: '5px', fontSize: '12px'}
    }
    return (
      <div className="member-container" style={customStyle.divStyle}>
        <div style={customStyle.innerDivStyle}>
          <img style={customStyle.avatarMember} src={avatar} alt=""/>
          <h3 style={customStyle.name}>{name}</h3>
          <p style={customStyle.textStyle}>{position}</p>
          <p style={customStyle.alias}>@{alias}</p>
          <p style={customStyle.skills}>
            {skills.join(', ')}
          </p>
          <ul className="member-social-network">
            <SocialNetworks socialNetworks={socialMedia} iconSize="fa-lg"/>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamMember;
