// src/components/PersonList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the persons!', error);
      });
  }, []);

  return (
    <div>
      <h2>Person List</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
