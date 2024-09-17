import React from 'react';
import PersonAdd from './components/PersonAdd';
import PersonList from './components/PersonList';
import PersonRemove from './components/PersonRemove';

const App = () => {
  return (
    <div>
      <h1>Axios IN Detail</h1>
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </div>
  );
};

export default App;
