import React, { Component, createRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Nav from './components/nav';
// import SearchResults from './components/searchResults';
// import PopularMovies from './components/popularMovies';



import { PopularResults, SearchResults } from './components/movieResults';




export default class App extends Component {

  constructor() {
    super();
    this.searchResultsRef = createRef();
  }

  state = {
    search: '',
  }

  render() {
    return (
      <Router>
        <Nav onSearch={this.handleSearch}></Nav>

        <Switch>
          <Route path="/search">
            <SearchResults ref={this.searchResultsRef} search={this.state.search} />
          </Route>
          <Route path="/popular">
            <PopularResults />
          </Route>
        </Switch>


        {/* <Switch>
          <Route path="/search">
            <SearchResults ref={this.searchResultsRef} search={this.state.search} />
          </Route>
          <Route path="/popular">
            <PopularResults />
          </Route>
        </Switch> */}
      </Router>
    );
  }

  handleSearch = (event, search) => {
    event.preventDefault();
    // this.setState({ search })
    this.searchResultsRef.current.updateSearchResults(search);
  }
}

/**
 * TODO:
 * cache search results maybe?
 * actor search page
 * movie page
 * pagination
 * filter by genre
 * colors
 * add some animation
 * actor details
 * tests?
 */