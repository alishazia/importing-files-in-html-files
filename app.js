import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Import extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    alert('I am alert tag inside render function')
    return(
      <div>
      This is render function.
      </div>
    )
  }
}
