import React, { Component } from 'react';

import { PageHeader } from 'react-bootstrap';

import LoadingBar from 'react-redux-loading-bar';

import CompanyInformation from './containers/CompanyInformation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageHeader>
            Simple Application (ReactJS + Redux)<small>Subtext for header</small>
          </PageHeader>
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