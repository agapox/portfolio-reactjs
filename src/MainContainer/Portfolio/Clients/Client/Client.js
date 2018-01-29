import React, { Component } from 'react';
import SocialNetworks from '../../../../Tools/SocialNetworks/SocialNetworks';
//import 'Projects.css';

class Client extends Component {

  render() {
    let client = this.props.client
    //client && console.log(client)
    return (
      <div className={'client-' + client.name}>
        <h3>{client.name}</h3>
        <p style={{fontWeight:'bold'}}>Industry</p>
        <p>{client.bussinesIndustry.join(', ')}</p>
        <p>{client.overview}</p>
        <SocialNetworks socialNetworks={client.socialNetworks} iconSize=""/>
      </div>
    );
  }
}

export default Client;