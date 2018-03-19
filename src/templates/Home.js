import React, { Component } from 'react';
import Header from '../components/Header';
import Events from '../components/Events';
import '../App.css';

class Home extends Component {
  render() {
    return (
    <div>
      <Header />
      <Events />
    </div>
    );
  }
}

export default Home;
