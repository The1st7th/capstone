import React, { Component } from 'react'
import Data from './data'
import Chatbox from './chatbox';

export default class main extends Component {
  render() {
    return (
      <div>
        <Chatbox/>
        <Data/>
      </div>
    )
  }
}
