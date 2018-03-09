import React, { Component } from 'react';

import LoadingBar from 'react-redux-loading-bar';

import CompanyList from './components/CompanyList';
import CompanyInformation from './components/CompanyInformation';

import { Grid, Row, Col } from 'react-bootstrap';

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

          <Grid>

            <Row className="show-grid">

              <Col>
                <CompanyList />
              </Col>

            </Row>

            <Row className="show-grid">

              <Col>
                <CompanyInformation />
              </Col>

            </Row>

          </Grid>

        </div>
      </div>
    );
  }
}

export default App;