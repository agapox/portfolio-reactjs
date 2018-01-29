import React, { Component } from 'react';
import './TeamMember.css';
import SocialNetworks from '../../../Tools/SocialNetworks/SocialNetworks';
//import MemberItem from '../../../Behance/Users'
// import Home from './Home/Home';
// import AboutUs from './AboutUs/AboutUs';
// import Portfolio from './Portfolio/Portfolio';

let memberItem;

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
    memberItem && console.log(memberItem)
    let memberInfo = this.props.memberInfo
    let customStyle = {
      divStyle: {
        width: '22%',
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
      }
    }
    return (
      <div className="member-container" style={customStyle.divStyle}>
        <div style={customStyle.innerDivStyle}>
          {memberInfo.avatar &&
          <img style={customStyle.avatarMember} src={memberInfo.avatar} alt=""/>}
          <h4 style={customStyle.textStyle}>{memberInfo.name}</h4>
          <p style={customStyle.textStyle}>{memberInfo.alias}</p>
          <p style={customStyle.textStyle}>{memberInfo.position}</p>
          <p style={customStyle.textStyle}>
            {memberInfo.skills.join('#')}
          </p>
          <ul className="member-social-network">
            <SocialNetworks socialNetworks={memberInfo.socialNetworks} iconSize=""/>
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamMember;
