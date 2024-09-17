import React, { useState } from 'react';
import axios from 'axios';


const PersonRemove = () => {
  const [personId, setPersonId] = useState('');

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${personId}`)
      .then((response) => {
        console.log('Person deleted:', response.data);
      })
      .catch((error) => {
        console.error('There was an error deleting the person!', error);
      });
  };

  return (
    <div>
      <h2>Remove Person</h2>
      <input
        type="text"
        value={personId}
        onChange={(e) => setPersonId(e.target.value)}
        placeholder="Enter person ID"
      />
      <button onClick={handleDelete}>Remove Person</button>
    </div>
  );
};

export default PersonRemove;
