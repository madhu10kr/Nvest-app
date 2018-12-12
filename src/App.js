import React, { Component } from 'react';
import './App.css';
import Container from './component/container/Container';
import { BrowserRouter, Route } from 'react-router-dom';
// import Form from './component/form/Form';
import Directory from './component/directoryTool/Directory';
import CreateERC from './component/CreateERC/CreateERC';
import DirectorySubmissions from './component/directoryTool/dirsubmission/DirectorySubmissions'
import CreateContract from './component/createContract/CreateContract'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <section>
            <Route exact path="/dashboard" component={Container} />
            <Route exact path="/create-ERC" component={CreateERC} />
            <Route exact path="/create-contract" component={CreateContract} />
            <Route exact path="/directory-tool" component={Directory} />
            <Route exact path="/directory-submission" component={DirectorySubmissions} />
          </section>
      </BrowserRouter>
    );
  }
}

export default App;
