import React, { Component } from 'react';
import Form from './form'
import Header from './header'

export default class Display extends Component {
  render() {
    return (
        <div className="complaint-form">
            <Header />
            <Form />
        </div>
    );
  }
}


