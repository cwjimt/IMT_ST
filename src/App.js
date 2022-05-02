import React, { Component } from 'react';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import "react-router-dom";
import {Route , BrowserRouter as Roter}from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Main/>
    );
  }
}

export default App;