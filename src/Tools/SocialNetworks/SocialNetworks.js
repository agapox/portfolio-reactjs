import React, { Component } from 'react';
import './SocialNetworks.css';
import SocialNetworkItem from './SocialNetworkItem/SocialNetworkItem';

class SocialNetworks extends Component {
  render() {
    const { socialNetworks } = this.props
    let socialNetworksStyle = {
      listNetworks: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center'
      }
    }
    return (
      <div>
        <ul style={socialNetworksStyle.listNetworks}>
          {
            socialNetworks.map((socialNetworkItem, index) => {
              //console.log(socialNetworkItem)
              return (
                <SocialNetworkItem key={index} socialNetworkItem={socialNetworkItem} iconSize={this.props.iconSize} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default SocialNetworks;