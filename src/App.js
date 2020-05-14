import React, { Component } from 'react';
import './App.css';
import BlogEntry from './BlogEntry';


class App extends Component {
  constructor() {
    super()
    this.state = { showEntries: true }
  }

 

  blogEntries = [
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

  onButtonClick = (button) => {
    console.log('Clicked on button')
     this.setState({showEntries: false});
  }

  blogElements = this.blogEntries.map((entry) => {
    console.log(entry)

    return (
      <BlogEntry key={entry.id} entry={entry}/>
    )
  })

  render() {
    return (
      <div className="App">
        <button onClick={this.onButtonClick}>Hide Elements</button>
        {this.state.showEntries && this.blogElements}
      </div>
    );
  }
}

export default App;
