import React from 'react';
import './App.css';

function App() {
  const firstName = 'Thierry';
  const lastName = 'Feuzeu';
  const job  = 'Formateur';
  const ville = 'St Malo';

 

  return (
    <div className="App">
    <h3>Nom complet : {`${firstName} ${lastName}`}</h3>
    <p>Job: {job}</p>
    <p>Ville: {ville}</p>
    </div>
  );
}

export default App;
