import React, { Component } from 'react';
import companyData from '../../companyData.json';
import TeamMember from './TeamMember/TeamMember';

class Team extends Component {

  constructor() {
    super()
    this.state = {
      companyData: ''
    }
  }
  componentDidMount() {
    this.setState({
      companyData: companyData
    })
  }
  
  render() {
    let companyTeam = companyData.company.team
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
        <div style={customStyle.divTeamMember} className="team-members-container">
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
