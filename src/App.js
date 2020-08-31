import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import nextId, { setPrefix } from "react-id-generator";
import RefreshButton from './components/refresh-button/refresh-button.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: '',
      spin: false
    };
  }

  fetchData() {
    fetch("https://randomuser.me/api/?results=16&inc=name")
      .then(response => response.json())
      .then(users => {
        // add unique id to imported users
        setPrefix("");
        users = users.results.map(user => {
          user.id = nextId();
          user.name = user.name.first + " " + user.name.last;
          return user;
        });
        // store users as characters in state
        this.setState({ characters: users });
      });

    return true;
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  handleRefresh = () => {
    this.setState({ spin: true });
    setTimeout(() => {
      this.setState({ spin: false });
    }, 3000);
    this.fetchData();
  }

  render() {
    // filter items by string in search box
    const {characters, searchField} = this.state;
    const filteredCharacters = characters.filter(character => 
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // if no search string matches generated names then make new character using the search string
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
        <RefreshButton handleRefresh={this.handleRefresh} spin={this.state.spin} />
        <SearchBox handleChange={this.handleChange} placeholder="Search your cat" />
        <CardList characters={filteredCharacters} />
        <p className="footer">Created by <a href="https://pawankolhe.com" className="underline">Pawan Kolhe</a></p>
      </div>
    );
  }
}

export default App;
