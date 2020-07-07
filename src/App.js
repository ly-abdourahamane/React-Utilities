import React from "react";
import "./App.css";
import BlogEntry from "./BlogEntry";
import MyHooks from "./MyHooks";
import FormHook from "./FormHook";
import MyCard from "./components/MyCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showEntries: true,
      blogEntries: [],
      numbers: [1, 2, 3, 4, 5],
    };
  }

  onButtonClick = (button) => {
    console.log("Clicked on button");
    this.setState({ showEntries: !this.state.showEntries });
  };

  onBlogEntryClick = (entry) => {
    console.log("Clicked onblog entry", entry);
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((entries) => entries.slice(0, 5))
      .then((entries) =>
        entries.map((entry) => {
          return { ...entry, summary: entry.body };
        })
      )
      // .then(entries => entries.slice(0, 10).map((entry) => { return {...entry, summary: entry.body}}))
      .then((entries) => this.setState({ blogEntries: entries }));
  }

  render() {
    let blogElements = this.state.blogEntries.map((entry) => {
      // console.log(entry)

      return (
        <BlogEntry
          key={entry.id}
          entry={entry}
          onClick={this.onBlogEntryClick}
        />
      );
    });

    let cardList = this.state.blogEntries.map((entry) => {
      return <MyCard key={entry.id} />;
    });

    return (
      <div className="App">
        <FormHook />

        <MyHooks bae={"Djeina"} maried={false} numbers={this.state.numbers} />
        <button onClick={this.onButtonClick}>Toggle Elements</button>
        {this.state.showEntries && blogElements}

        {cardList}
      </div>
    );
  }
}

export default App;
