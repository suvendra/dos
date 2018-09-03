import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login } from './views/auth';
const {app} = window.require('electron').remote;
console.log(window.href)
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="LoginPage" component={Login} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
