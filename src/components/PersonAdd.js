import React, { useState } from 'react';
import axios from 'axios';

const PersonAdd = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then((response) => {
        console.log('Person added:', response.data);
      })
      .catch((error) => {
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
      </form>
    </div>
  );
};

export default PersonAdd;
