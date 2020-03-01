import React, { Component, createRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { NavActors, NavMovies } from './components/nav';
import MoviesContainer from './components/moviesContainer';
import ActorsContainer from './components/actorsContainer';

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
        <Switch>

          <Route path="/movies">
            <NavMovies onSearch={this.handleMovieSearch} type='movies'></NavMovies>
            <MoviesContainer ref={this.searchResultsRef} search={this.state.search} />
          </Route>

          <Route path="/actors">
            <NavActors onSearch={this.handleActorSearch} type='actors'></NavActors>
            <ActorsContainer />
          </Route>

        </Switch>
      </Router>
    );
  }

  handleMovieSearch = (event, search) => {
    event.preventDefault();
    this.searchResultsRef.current.updateMovieResults(search);
  }

  handleActorSearch = (event, search) => {
    event.preventDefault();
    console.log('This has not been implemented');
  }
}

/**
 * TODO:
 * backend, proxy all network requests
 * CSS: buttons, back, ronts
 * images
 * tests?
 * remove all apikey references
 */


//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>