import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import nextId, { setPrefix } from "react-id-generator";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://uinames.com/api/?region=india&amount=16&ext")
      .then(response => response.json())
      .then(users => {
        // add unique id to imported users
        setPrefix("");
        users = users.map(user => {
          user.id = nextId();
          user.name += " " + user.surname;
          return user;
        });
        // store users as characters in state
        this.setState({ characters: users });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // filter items by string in search box
    const {characters, searchField} = this.state;
    const filteredCharacters = characters.filter(character => 
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if(filteredCharacters.length === 0) {
      filteredCharacters[1] = {
        name: searchField,
        email: searchField.toLowerCase().replace(" ", "") + "@example.com",
        id: 0,
      }
    }

    return (
      <div className="App">
        <h1>Cat Search</h1>
        <SearchBox handleChange={this.handleChange} placeholder="Search your cat" />
        <CardList characters={filteredCharacters} />
        <p className="footer">Created by Pawan Kolhe</p>
      </div>
    );
  }
}

export default App;
