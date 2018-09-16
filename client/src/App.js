import React, { Component } from 'react';
import DefaultLayout from './containers/DefaultLayout'
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(faStar, far)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <DefaultLayout/>
      </div>
    );
  }
}

export default App;
