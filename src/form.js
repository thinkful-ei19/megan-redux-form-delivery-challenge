import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';

export class Form extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          console.log(values)
      )}
      >
        
          Tracking Number
          <br />

          <Field 
            component="input"
            element="input"
            name="tracking-number"
            label="tracking-number"
            id="tracking-number"
            // validate= {[required, notEmpty, fiveCharOnly, onlyNumbers]}
          />
        

        <div>
        What is your issue?
          <br/>

          <Field 
            component="select" 
            element="select"
            name="issue-description" 
            id="issue"
            label="issue"
          >
            <option></option>
            <option name="not-arrived">My delivery hasn't arrived</option>
            <option name="wrong-item">The wrong item was delivered</option>
            <option name="part-missing">Part of my order is missing</option>
            <option name="damaged">Some of my order arrived damaged</option>
            <option name="other">Other(give details below)</option>
          </Field>

        </div>
          
        <div>
          Give more details (optional)
          <br />

          <Field
            component="textarea"
            element="textarea"
            name="details"
            label="details"
          />

        </div>

        <button type="submit">Submit</button>

      </form>
    );
  }
}


export default reduxForm({
  form:'complaints'
})(Form)