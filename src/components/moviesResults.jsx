import React, { Fragment } from 'react';
import MovieTile from './movieTile';

export default function MoviesResults(props) {
  return (
    <Fragment>
      <h3>{props.title}</h3>
      <section className="d-flex flex-wrap">
        {populateMovieTitles()}
      </section>
    </Fragment>
  );

  function populateMovieTitles() {
    return props.movies.map(movie => {
      return (
        <MovieTile
          key={movie.id}
          {...movie}
          onMovieSeeMore={props.onMovieSeeMore}
        />
      )
    });
  }
}
