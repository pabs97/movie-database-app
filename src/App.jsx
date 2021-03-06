import React, { Component, createRef } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './index.css';

import Nav from './components/nav';
import MovieInfo from './components/movieInfo';
import MoviesContainer from './components/moviesContainer';
import ActorsContainer from './components/actorsContainer';

class App extends Component {

  constructor() {
    super();
    this.searchResultsRef = createRef();
  }

  state = {
    search: '',
    individual: false,
  }

  render() {


    return (
      <Router>
        <Switch>

          <Route path="/movie/:id">
            <Nav onSearch={this.handleMovieSearch} type='movies'></Nav>
            <MovieInfo2 />
          </Route>

          <Route path="/movies">
            <Nav onSearch={this.handleMovieSearch} type='movies'></Nav>
            <MoviesContainer onMovieSeeMore={this.getIndividualMovieInfo} ref={this.searchResultsRef} search={this.state.search} />
          </Route>

          <Route path="/actors">
            <Nav onSearch={this.handleActorSearch} type='actors'></Nav>
            <ActorsContainer />
          </Route>

        </Switch>
      </Router>
    );
  }

  handleMovieSearch = (event, search) => {
    event.preventDefault();
    this.searchResultsRef.current.updateResults(search);
  }

  handleActorSearch = (event, search) => {
    event.preventDefault();
    console.log('This has not been implemented');
  }
}

export default App;



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