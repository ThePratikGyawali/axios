// src/components/PersonAdd.js

import React, { useState } from 'react';
import axios from 'axios';

const PersonAdd = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then((response) => {
        setMessage('Person added successfully!');
        setName('');
      })
      .catch((error) => {
        setMessage('There was an error adding the person!');
        console.error('There was an error adding the person!', error);
      });
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Add Person</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default PersonAdd;
