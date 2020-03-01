import React, { Component, Fragment } from 'react';
import MovieInfo from './movieInfo';
import MoviesResults from './moviesResults';
import { apikey } from '../util/keys.json';

class MoviesContainer extends Component {

  state = {
    movies: [],
    individual: false,
    title: 'Popular Movies',
  }

  render() {
    const { movies, individual, title } = this.state;

    if (individual) {
      return (
        <Fragment>
          <button className="btn btn-primary" onClick={this.handleBackClick}>Back to Results</button>
          <MovieInfo
            {...individual}
          />
        </Fragment>
      );
    }

    return (
      <MoviesResults
        title={title}
        movies={movies}
        onMovieSeeMore={this.getIndividualMovieInfo}
      />
    );
  }

  async componentDidMount() {
    try {
      const url = 'http://localhost:3001/popularMovies';
      await this.getMovieResults(url);
    } catch (e) {
      console.error(e);
    }
  }

  handleBackClick = () => {
    this.setState({ individual: false });
  }

  getIndividualMovieInfo = async (movieId) => {
    try {
      const url = `http://localhost:3001/findMovie?query=${movieId}`;
      const response = await fetch(url);
      const individual = await response.json();
      this.setState({ individual });
    } catch (e) {
      console.error(e);
    }
  }

  async updateMovieResults(search) {
    try {
      this.setState({
        individual: '',
        title: `Search Results for "${search}"`
      });
      const url = `http://localhost:3001/searchMovies?query=${search}`;
      await this.getMovieResults(url);
    } catch (e) {
      console.error(e);
    }
  }

  async getMovieResults(url) {
    try {
      const response = await fetch(url);
      const movies = await response.json();
      this.setState({ movies });
    } catch (e) {
      console.error(e);
    }
  }

}

export default MoviesContainer;