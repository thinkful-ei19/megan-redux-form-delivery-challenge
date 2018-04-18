import React, { Component } from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {required, notEmpty, fiveCharOnly, onlyNumbers} from './validators';
import InputComponent from './input';

export class Form extends Component {
  
  postAfterSubmitting(valuesFromForm){
    const API_BASE_URL = 'https://us-central1-delivery-form-api.cloudfunctions.net/api/report';
    return fetch(API_BASE_URL, {
      method:'POST',
      body: JSON.stringify(valuesFromForm),
      headers: {'Content-Type': 'application/json'} 
      //why do we need this/what does it do? ^ Mentor Notes
    })
      .then(res => {
    //     if (!res.ok) {
    //         if (
    //             res.headers.has('content-type') &&
    //             res.headers
    //                 .get('content-type')
    //                 .startsWith('application/json')
    //         ) {
    //             // It's a nice JSON error returned by us, so decode it
    //             return res.json().then(err => Promise.reject(err));
    //         }
    //         // It's a less informative error returned by express
    //         return Promise.reject({
    //             code: res.status,
    //             message: res.statusText
    //         });
    //     }
        console.log(res)
        return;
    })
    //what exactly is this doing ^ Mentor Notes
        .then(()=> {
          console.log('Submitted Values they are: ', valuesFromForm)
          setTimeout(()=>{
            document.getElementsByClassName(`message-success`)[0].innerHTML=``;
            },4000)
            //hacky code via Alex to make the success message dissapear after some time.
      })
        .catch(err=>{
          // const {reason, message, location} = err;
          //       if (reason === 'ValidationError') {
          //           // Convert ValidationErrors into SubmissionErrors for Redux Form
          //           return Promise.reject(
          //               new SubmissionError({
          //                   [location]: message
          //               })
          //           );
          //       }
          //What is the purpose of this^ when it's already displaying the validation error via the input component in input.js? Mentor Notes
          return Promise.reject(
            new SubmissionError({
                _error: 'Error Submitting Form'
              }
            )
          )
        })
  }



  
  render() {

    let successMessage;
    if(this.props.submitSucceeded === true){
      successMessage=
      <div className="message-success">Report Submitted Successfully</div>
    }


    let errorMessage;
    if(this.props.error){
      errorMessage = 
      <div className="error-message">{this.props.error}</div>
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(values =>{
          console.log(values);
          this.postAfterSubmitting(values);
            }
          )
        }
      >
        {successMessage}
        {errorMessage}
        <label htmlFor="trackingNumber"> Tracking Number</label>
          <br/>
          <Field 
            component={InputComponent}
            element="input"
            name="trackingNumber"
            validate= {[required, notEmpty, fiveCharOnly, onlyNumbers]}
          />
        
        <label htmlFor="issue"> Issue</label>
          <br/>
          <Field 
            component={InputComponent} 
            element="select"
            name="issue" 
          >
            <option></option>
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order is missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other(give details below)</option>
          </Field>

        <label htmlFor="details"> Give More Details(optional)</label>
          <br/>
          <Field
            component={InputComponent}
            element="textarea"
            name="details"
          />


        <button type="submit">Submit</button>

      </form>
    );
  }
}


export default reduxForm({
  form:'complaints'
})(Form)