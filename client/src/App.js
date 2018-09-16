import React, { Component } from 'react';
import DefaultLayout from './containers/DefaultLayout'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <DefaultLayout/>
      </div>
    );
  }
}

export default App;
