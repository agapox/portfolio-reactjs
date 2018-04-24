import React, { Component } from 'react';

class SocialNetworkItem extends Component {
  render() {
    const { socialNetworkItem } = this.props
    let iconSize = this.props.iconSize;
    //socialNetworkItem.service_name && 
    //  console.log(socialNetworkItem.service_name.toLowerCase())
    return (
      <li className="social-media-item">
        <a href={socialNetworkItem.service_name && socialNetworkItem.url} target="_blank">
          {
            (
              socialNetworkItem.name === 'website' ? 
                <i className={'fa fa-globe ' + iconSize} aria-hidden="true"></i>
                : socialNetworkItem.service_name && <i className={'fa fa-' + socialNetworkItem.service_name.toLowerCase() + ' ' + iconSize} aria-hidden="true"></i>
            )

          }
        </a>
      </li>
    );
  }
}

export default SocialNetworkItem;