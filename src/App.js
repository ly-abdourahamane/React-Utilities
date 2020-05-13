import React from 'react';
import './App.css';

function App() {
  const firstName = 'Thierry';
  const lastName = 'Feuzeu';

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
  const user = { job: 'Formateur', city: 'Rennes' };

  const inputPlaceholder = 'Enter your details';
  const detailsInput = <input placeholder={inputPlaceholder} />;


  return (
    <div className="App">
    <h3>Nom complet : {getFullName(firstName, lastName)}</h3>
    <p>Job: {user.job}</p>
    <p>Ville: {user.city}</p>
    {detailsInput}
    </div>
  );
}

export default App;
