import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import New from './components/New';

export default class App extends Component {
  p = 'prem';
  render() {
    return (
      <div>
      <Navbar/>
      <New/>
        Hello Prem here {this.p}
      </div>
     
    )
  }
}



