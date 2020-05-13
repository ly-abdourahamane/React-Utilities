import React from 'react';
import './App.css';

function App() {
  const blogEntry = {
    title: 'Mon premier texte',
    summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
  }

  const styles = {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: '0 2px 5px #ccc'
  }

  return (
    <div className="App">
      <div style={styles}>
        <h3>{blogEntry.title}</h3>
        <p>{blogEntry.summary}</p>
      </div>
    </div>
  );
}
export default App;
