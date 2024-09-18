// src/components/PersonRemove.js

import React from 'react';
import axios from 'axios';

export default class PersonRemove extends React.Component {
  state = {
    id: '',
    message: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        this.setState({ message: 'Person deleted successfully!' });
      })
      .catch(error => {
        this.setState({ message: 'Error deleting the person!' });
        console.error('Error deleting the person!', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Remove Person</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
          {this.state.message && <p>{this.state.message}</p>}
        </form>
      </div>
    );
  }
}
