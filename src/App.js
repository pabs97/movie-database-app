import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Nav from './components/nav';
import MovieInfo from './components/movieInfo';
import MoviesContainer from './components/moviesContainer';
import ActorsContainer from './components/actorsContainer';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (

      <Router>
        <Provider store={store}>
          <Switch>

            <Route path="/movie/:id">
              <Nav type='movies'></Nav>
              <MovieInfo />
            </Route>

            <Route path="/movies">
              <Nav type='movies'></Nav>
              <MoviesContainer />
            </Route>

            <Route path="/actors">
              <Nav type='actors'></Nav>
              <ActorsContainer />
            </Route>

          </Switch>
        </Provider>
      </Router>

    );
  }
}

export default App;

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>