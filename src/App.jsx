import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// const store = createStore();
class App extends Component {
  render() {
    return (
  <BrowserRouter>
  {/* <Provider store={store}> */}
  <Route exact path="/" component={Main}/>
  {/* </Provider> */}
  </BrowserRouter>
    );
  }
}

export default App;
