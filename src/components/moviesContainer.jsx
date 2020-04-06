import React, { Component, Fragment } from 'react';
import MovieTile from './movieTile';
import { getPopularMoviesAction, searchMoviesAction } from '../actions/fetchMovieActions';
import { connect } from 'react-redux';

class MoviesContainer extends Component {

  render() {
    const { title, movies } = this.props;
    return (
      <Fragment>
        <h3>{title}</h3>
        <section className="d-flex flex-wrap">
          {populateMovieTitles()}
        </section>
      </Fragment>
    );

    function populateMovieTitles() {
      return movies.map(movie => {
        return (
          <MovieTile
            key={movie.id}
            {...movie}
          />
        )
      });
    }
  }

  componentDidMount() {
    if (!this.props.movies.length) this.props.getPopularMoviesAction();
  }

}

const mapStateToProps = (state) => {
  return { ...state.moviesContainerReducer };
}

export default connect(mapStateToProps, { getPopularMoviesAction, searchMoviesAction })(MoviesContainer);
