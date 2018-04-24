import React, { Component } from 'react';
import companyData from '../../companyData.json';
import teamData from '../../Behance/json/users.json';
import TeamMember from './TeamMember/TeamMember';
import Grow from 'material-ui/transitions/Grow';

const btnOccupationAreas = ['all','developer','designer']
const allOccupationAreas = ['developer','designer']

class Team extends Component {
  
  constructor() {
    super()
    this.state = {
      companyData: '',
      teamMembersData: '',
      occupationArea: allOccupationAreas.join(',')
    }
  }
  componentDidMount() {
    this.setState({
      companyData: companyData,
      teamMembersData: teamData
    })
  }

  handleSpecialistClick(el) {
    this.setState({
      occupationArea: el === 'all' ? allOccupationAreas.join(',') : el
    })
    console.log(el === 'all' ? allOccupationAreas.join(',') : el)
  }
  
  render() {
    let companyTeam = companyData.company.team
    const { teamMembersData } = this.state
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
        <div style={{textAlign:'center'}}>
          {
            btnOccupationAreas.map( (el,index) => {
              return (
                <button onClick={(el) => this.handleSpecialistClick(el.target.value)} value={el} key={`btn-${el}`}>{el}</button>
              )
            })
          }
        </div>
        <div style={customStyle.divTeamMember} className="team-members-container">
          {
            teamMembersData !== '' &&
            teamMembersData.map((member,index) => {
              return (
                <Grow key={'member-'+index} in={true} timeout={300 + index*200}>
                  <TeamMember
                    memberInfo={member}
                    avatar={member.user.images[276]}
                    name={member.user.display_name}
                    alias={member.user.username}
                    position={member.user.occupation}
                    skills={member.user.fields}
                    socialMedia={member.user.social_links}
                  />
                </Grow>
              )
            })
          }
        </div>

      </div>
    );
  }
}

export default Team;
