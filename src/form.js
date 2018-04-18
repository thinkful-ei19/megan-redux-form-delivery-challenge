import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, fiveCharOnly, onlyNumbers} from './validators';
import InputComponent from './input';

export class Form extends Component {




  
  render() {

    let successMessage;
    if(this.props.submitSucceeded === true){
      successMessage=
      <div className="success-message">Report Submitted Successfully</div>
    }


    let errorMessage;
    if(this.props.error){
      errorMessage = 
      <div className="error-message">{this.props.error}</div>
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(values =>{
          console.log(values)
            }
          )
        }
      >
        {successMessage}
        {errorMessage}

          <Field 
            component={InputComponent}
            element="input"
            name="Tracking Number"
            validate= {[required, notEmpty, fiveCharOnly, onlyNumbers]}
          />
        

          <Field 
            component={InputComponent} 
            element="select"
            name="Issue Description" 
          >
            <option></option>
            <option name="not-arrived">My delivery hasn't arrived</option>
            <option name="wrong-item">The wrong item was delivered</option>
            <option name="part-missing">Part of my order is missing</option>
            <option name="damaged">Some of my order arrived damaged</option>
            <option name="other">Other(give details below)</option>
          </Field>

          <Field
            component={InputComponent}
            element="textarea"
            name="Give More Details(optional)"
          />


        <button type="submit">Submit</button>

      </form>
    );
  }
}


export default reduxForm({
  form:'complaints'
})(Form)