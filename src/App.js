import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Info from './components/Info';
import Home from './templates/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/event/:event_id' component={Info}/>
      </Switch>
    );
  }
}

export default App;
