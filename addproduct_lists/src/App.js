import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import AddProd from './component/AddProd';
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <AddProd />
      </div>
    )
  }
}

export default App