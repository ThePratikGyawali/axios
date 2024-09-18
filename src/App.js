// src/App.js

import React from 'react';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';
import PersonRemove from './components/PersonRemove';
import Weather from './components/Weather'; // Import the Weather component

const App = () => {
  return (
    <div>
      <h1>Axios IN Detail</h1>
      <PersonAdd />
      <PersonList />
      <PersonRemove />
      <Weather /> {/* Add the Weather component here */}
    </div>
  );
};

export default App;
