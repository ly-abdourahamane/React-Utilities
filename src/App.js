import React from 'react';
import './App.css';
import BlogEntry from './BlogEntry';

function App() {
  const blogEntries = [
    {
      id: 'a1',
      title: 'Mon premier texte',
      summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
    },
    {
      id: 'a2',
      title: 'Mon deuxième texte',
      summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
    },
    {
      id: 'a3',
      title: 'Mon troisième texte',
      summary: "Le texte où j'explique donc pourquoi je commence à écrire des textes."
    }
  ]

  const buttonId = 5;

  const onButtonClick = (button, id) => {
    console.log('Clicked on button')
    console.log(id, button)
  }

  const blogElements = blogEntries.map((entry) => {
    console.log(entry)

    return (
      <BlogEntry key={entry.id} entry={entry}/>
    )
  })

  return (
    <div className="App">
      <button onClick={(e) => onButtonClick(e.target, buttonId)}>Hide Elements</button>
      {blogElements}
    </div>
  );
}
export default App;
