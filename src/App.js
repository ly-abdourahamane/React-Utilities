import React from 'react';
import './App.css';

function App() {
  const blogEntry = {
    title: 'Mon premier texte',
    summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
  }

  return (
    <div className="App">
      <div className="BlogEntry">
        <h3>{blogEntry.title}</h3>
        <p>{blogEntry.summary}</p>
      </div>
    </div>
  );
}
export default App;
