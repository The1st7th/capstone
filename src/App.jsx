import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main';
import User from './user';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// const store = createStore();
class App extends Component {
  render() {
    return (
  <BrowserRouter>
  <div>
  {/* <Provider store={store}> */}
  <Route exact path="/" component={User}/>
  <Route path="/chat" component={Main}/>
  </div>
  {/* </Provider> */}
  </BrowserRouter>
    );
  }
}

export default App;
