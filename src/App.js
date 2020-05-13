import React from 'react';
import './App.css';

function App() {
  const blogEntry = {
    title: 'Mon premier texte',
    summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
  }

  const blogEntries = [
    {
      id: 'id01',
      title: 'Mon premier texte',
      summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
    },
    {
      id: 'id02',
      title: 'Mon deuxième texte',
      summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
    },
    {
      id: 'id03',
      title: 'Mon troisième texte',
      summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
    }
  ]

  const blogElements = blogEntries.map((entry) => {
    console.log(entry);
    return (
      <div className="BlogEntry" key={entry.id}>
        <h3>{entry.title}</h3>
        <p>{entry.summary}</p>
      </div>
    )
  });

  return (
    <div className="App">
      {blogElements}
    </div>
  );
}
export default App;
