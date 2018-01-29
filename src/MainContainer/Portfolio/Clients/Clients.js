import React, { Component } from 'react';
import Client from './Client/Client';
import './Clients.css';

class Clients extends Component {

  render() {
    let clients = this.props.clients
    clients && console.log(clients)
    return (
      <div className={'clients-container'}>
        <h2>Project Container</h2>
        {
          clients.map((client,index) => {
            return <Client key={'client-' + client.name} client={client} />
          })
        }
      </div>
    );
  }
}

export default Clients;
