import React from 'react';
import './App.css';

function App() {
  const firstName = 'Thierry';
  const lastName = 'Feuzeu';
  const job  = 'Formateur';
  const city = 'St Malo';

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  const hobbies = [ 'cinema', 'karting' ];
  const score = 5;

  return (
    <div className="App">
    <h3>Nom complet : {getFullName(firstName, lastName)}</h3>
    <p>Job: {job}</p>
    <p>Ville: {city}</p>
    <ul>
      {hobbies.map((hobby) => <li>{hobby}</li>)}
    </ul>
    <p>{score > 10 ? "Good" : "Not so good"} score</p>
    </div>
  );
}

export default App;
