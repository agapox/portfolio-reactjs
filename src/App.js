import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div id ="page-wrapper">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
