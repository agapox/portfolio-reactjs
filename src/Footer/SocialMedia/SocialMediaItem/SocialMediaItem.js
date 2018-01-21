import React, { Component } from 'react';

class SocialMediaItem extends Component {
  
  render() {
    let socialNetwork = this.props.socialNetworkName;
    //console.log(socialNetwork)
    return (
      <div>
        <p>{socialNetwork}</p>
      </div>
    );
  }
}

export default SocialMediaItem;