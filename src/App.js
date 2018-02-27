import React, { Component } from 'react';
import './App.css';

import LoadingBar from 'react-redux-loading-bar'

import CompanyList from './components/CompanyList'
import CompanyInformation from './components/CompanyInformation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Application (ReactJS + Redux)</h1>
          <LoadingBar />
        </header>
        <div className="App-intro">
        
          <CompanyList />

          <CompanyInformation />

        </div>
      </div>
    );
  }
}

export default App;
