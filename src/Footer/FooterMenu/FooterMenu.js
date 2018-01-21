import React, { Component } from 'react';

class FooterMenu extends Component {
  render() {
    let mainMenu = this.props.mainMenu
    let customStyle = {
      divStyle: {
        textAlign: 'center'
      },
      ulStyle: {
        listStyle: 'none',
        margin: '1rem auto',
        padding: 0
      },
      liStyle: {
        display: 'inline-block',
        textAlign: 'center',
        padding: '1rem'
      }
    }
    return (
      <div style={customStyle.divStyle}>
        <ul style={customStyle.ulStyle}>
          {mainMenu.map((el,index) => {
            return(
              <li key={index} style={customStyle.liStyle}>
                {el}
              </li>
            )
          })}
        </ul>

      </div>
      
    );
  }
}

export default FooterMenu;
