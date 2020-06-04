import React, { Component } from 'react';
import { render } from 'react-dom';
import Import from './app'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
      <div>
      <Import/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));