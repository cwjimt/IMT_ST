import React, { Component } from 'react';
import Home from './pages/home/home';
import Sale_order_home from './pages/sale-order-home/Sale_order_home';
import "react-router-dom";
import "./styles/reset.scss";
import "./styles/_variables.scss";
import {Route , BrowserRouter , Routes}from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Sale_order_home" element={<Sale_order_home/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;