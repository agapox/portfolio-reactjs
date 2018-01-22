import React, { Component } from 'react';
import TeamMember from './TeamMember/TeamMember';

class Team extends Component {
  render() {
    let companyTeam = this.props.companyTeam
    // companyTeam && console.log(companyTeam)
    let customStyle = {
      divTeamOverview: {
        width: '70%',
        margin: '2rem auto',
        textAlign: 'center'
      },
      divTeamMember: {
        width: '90%',
        margin: '2rem auto',
        textAlign: 'center'
      },
      alignTextCenter: {
        textAlign: 'center'
      }
    }
    return (
      <div>
        <div style={customStyle.divTeamOverview} className="team-overview">
          <h1>Our Team</h1>
          <h3>
            {companyTeam.overview}
          </h3>
        </div>
        <div style={customStyle.divTeamMember} className="team-overview">
          <h2 style={customStyle.alignTextCenter}>Team Members</h2>
          {
            companyTeam.members.map((member,index) => {
              return <TeamMember key={'member-'+index} memberInfo={member}/>
            })
          }
        </div>

      </div>
    );
  }
}

export default Team;
