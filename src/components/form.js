import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      pilot: ''
    }

  }
}
render() {
  return (
    <form>
    <input type = 'text' value = {this.state.input}/>
    </form>
  )
}
