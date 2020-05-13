import React from 'react';
import './App.css';

function App() {
  const fullName = 'Abdourahamane LY';
  const job  = 'Developpeur';
  const ville = 'Antibes';

 

  return (
    <div className="App">
    <h3>Nom complet : {fullName}</h3>
    <p>Job: {job}</p>
    <p>Ville: {ville}</p>
    </div>
  );
}

export default App;
