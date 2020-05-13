import React from 'react';
import './App.css';
import BlogEntry from './BlogEntry';

function App() {
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
    return (
      <BlogEntry entry={entry} key={entry.id}/>
    )
  });

  return (
    <div className="App">
      {blogElements}
    </div>
  );
}
export default App;
