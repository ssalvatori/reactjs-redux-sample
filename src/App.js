import React, { Component } from 'react';

import LoadingBar from 'react-redux-loading-bar';

import CompanyInformation from './containers/CompanyInformation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Application (ReactJS + Redux)</h1>
          <LoadingBar />
        </header>
        <div className="App-intro">

          <CompanyInformation />

        </div>
      </div>
    );
  }
}

export default App;