import React, { Component } from 'react';
//import FontIcon from 'material-ui/Icon';
import './SocialMediaItem.css'

class SocialMediaItem extends Component {
  
  render() {
    let socialNetwork = this.props.socialMedia;
    // socialNetwork && console.log(socialNetwork)
    return (
      <li className="social-media-item">
        <a href={socialNetwork.url}>
          <i className={'fa fa-' + socialNetwork.name + ' fa-2x'} aria-hidden="true"></i>
        </a>
      </li>
    );
  }
}

export default SocialMediaItem;