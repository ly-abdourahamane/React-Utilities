import React from 'react';
import './App.css';

function App() {
  const firstName = 'Thierry';
  const lastName = 'Feuzeu';
  const job  = 'Formateur';
  const city = 'St Malo';

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  const inputPlaceholder = 'Enter your details';
  const detailsInput = <input placeholder={inputPlaceholder} />;


  return (
    <div className="App">
    <h3>Nom complet : {getFullName(firstName, lastName)}</h3>
    <p>Job: {job}</p>
    <p>Ville: {city}</p>
    {detailsInput}
    </div>
  );
}

export default App;
