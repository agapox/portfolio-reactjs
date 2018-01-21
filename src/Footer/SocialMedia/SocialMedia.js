import React, { Component } from 'react';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem'

class SocialMedia extends Component {

  render() {
    let socialMedia = this.props.companySocialMedia
    // socialMedia && console.log(socialMedia)
    let socialNetworksStyle = {
      listNetworks: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center'
      }
    }
    // socialNetworksStyle && console.log(socialNetworksStyle.listNetworks)
    return (
      <div className="social-media-cont">
        <ul style={socialNetworksStyle.listNetworks}>
          {socialMedia.map((el, index) => {
            // console.log(index)
            // console.log(el.url)
            if (el.url === '') {
              return false
            } else {
              return <SocialMediaItem key={index} socialMedia={el} />
            }
          })}
        </ul>
      </div>
    );
  }
}

export default SocialMedia;
