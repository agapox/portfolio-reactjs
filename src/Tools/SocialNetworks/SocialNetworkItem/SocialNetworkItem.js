import React, { Component } from 'react';

class SocialNetworkItem extends Component {
  render() {
    let socialNetworkItem = this.props.socialNetworkItem;
    let iconSize = this.props.iconSize;
    //console.log(socialNetworkItem)
    return (
      <li className="social-media-item">
        <a href={socialNetworkItem.url}>
          {
            (
              socialNetworkItem.name === 'website' ? 
                <i className={'fa fa-globe ' + iconSize} aria-hidden="true"></i>
                : <i className={'fa fa-' + socialNetworkItem.name + ' ' + iconSize} aria-hidden="true"></i>
            )

          }
        </a>
      </li>
    );
  }
}

export default SocialNetworkItem;