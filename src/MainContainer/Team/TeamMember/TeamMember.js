import React, { Component } from 'react';
import './TeamMember.css';
// import Home from './Home/Home';
// import AboutUs from './AboutUs/AboutUs';
// import Portfolio from './Portfolio/Portfolio';

class TeamMember extends Component {

  render() {
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
            {
              memberInfo.socialNetworks.map((network, index) => {
                return(
                  <li className="member-social-item" key={'social-item'+index}>
                    <a href={network.url} target="_blank">
                      <i className={'fa fa-' + network.name + ' fa-lg'} aria-hidden="true"></i>
                    </a>
                  </li>
                )
              })
            } 
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamMember;
