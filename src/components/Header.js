import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://smarkets.com/static/img/smarkets-logo.svg" className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
