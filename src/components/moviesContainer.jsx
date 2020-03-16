import React, { Component, Fragment } from 'react';
import MovieInfo from './movieInfo';
import MoviesResults from './moviesResults';

import { getPopularMovies, updateMovieResults } from '../util/movieDbApi';

class MoviesContainer extends Component {

  state = {
    movies: [],
    individual: false,
    title: 'Popular Movies',
  }

  render() {
    const { movies, individual, title } = this.state;

    // TODO: add this to movieInfo2
    // if (individual) {
    //   return (
    //     <Fragment>
    //       <button className="btn btn-primary" onClick={this.handleBackClick}>Back to Results</button>
    //       <MovieInfo
    //         {...individual}
    //       />
    //     </Fragment>
    //   );
    // }

    return (
      <MoviesResults
        title={title}
        movies={movies}
        onMovieSeeMore={this.props.onMovieSeeMore}
      />
    );
  }

  async componentDidMount() {
    const movies = await getPopularMovies();
    this.setState({ movies });
  }

  async updateResults(search) {
    const movies = await updateMovieResults(search);
    this.setState({ movies });
  }

  // handleBackClick = () => {
  //   this.setState({ individual: false });
  // }
}

export default MoviesContainer;