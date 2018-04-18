import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label for="tracking-num"> Tracking Number</label>
          <br />
          <input type="text" />
        </div>

        <div>
        <label for="tracking-num"> What is your issue?</label>
          <br/>
          <select name="issue" id="issue">
            <option value="not-arrived">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="part-missing">Part of my order is missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other(give details below)</option>
          </select>
        </div>
          
        <div>
          <label for="tracking-num">Give more details (optional)</label>
          <br />
          <textarea name="details"></textarea>
        </div>
        <button type="submit">Submit</button>

      </form>
    );
  }
}


