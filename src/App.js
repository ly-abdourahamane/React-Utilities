import React from 'react';
import './App.css';

function App() {
  const firstName = 'Thierry';
  const lastName = 'Feuzeu';
  const job  = 'Formateur';
  const ville = 'St Malo';

 

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
  const placeholder = 'Enter your details';

 

  return (
    <div className="App">
    <h3>Nom complet : {getFullName(firstName, lastName)}</h3>
    <p>Job: {job}</p>
    <p>Ville: {ville}</p>
    <input placeholder={placeholder} />
    </div>
  );
}

export default App;
