// src/App.js

import React from 'react';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';
import PersonRemove from './components/PersonRemove';
import Weather from './components/Weather';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <h1>Axios IN Detail</h1>
      <Weather />
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </div>
  );
};

export default App;
