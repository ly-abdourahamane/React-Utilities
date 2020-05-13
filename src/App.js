import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fullName = 'Thierry Feuzeu';
  const job  = 'Formateur';
  const ville = 'Rennes';

 

  return (
    <div className="App">
    <h3>Nom complet : {fullName}</h3>
    <p>Job: {job}</p>
    <p>Ville: {ville}</p>
    </div>
  );
}

export default App;
