import React, { Component } from 'react';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem'

let fakeServerData = {
  socialNetwork: {
    items: [
      'Instagram',
      'Behance'
    ]
  }
}

class SocialMedia extends Component {

  constructor() {
    super();
    this.state = {
      serverData: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      })

    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.serverData.socialNetwork ? 
        <div>
          <h2>SocialMedia Component</h2>
          <div>
            {this.state.serverData.socialNetwork.items.map((item,index) => 
              <SocialMediaItem key={index} socialNetworkName={item}/>
            )}
          </div>
        </div>:'Loading...'
        }
      </div>
    );
  }
}

export default SocialMedia;
