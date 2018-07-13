import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import chatbox from  './chatbox';
import data from './data';


class App extends Component {
  render() {
    return (
  <div>
  <chatbox />
  <data />
  </div>
    );
  }
}

export default App;
