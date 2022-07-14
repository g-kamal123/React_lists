import './App.css';

import React, { Component } from 'react'
import Json from './Json';

export class App extends Component {
  state = {
    arr:['Mango','Apple','Banana','Grapes','Potatto']
  }
  render() {
    return (
      <div>
        <b>list of fruits</b>
        <ul>
          {this.state.arr.map((item)=>
          <li>{item}</li>)}
        </ul>
        <Json />
      </div>
    )
  }
}

export default App