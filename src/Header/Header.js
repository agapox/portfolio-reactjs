import React, { Component } from 'react';
import Button from 'material-ui/Button';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header Component</h1>
        <Button raised color="primary">
          Hello World
        </Button>
      </header>
    );
  }
}

export default Header;
