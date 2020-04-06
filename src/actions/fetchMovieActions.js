import { GET_POPULAR_MOVIES, SEARCH_MOVIES, GET_MOVIE } from './types';

function _getUrl(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(console.error);
}

export const getPopularMoviesAction = () => (dispatch) => {
  const url = 'http://localhost:3001/popularMovies';
  _getUrl(url)
    .then((movies) => dispatch({
      type: GET_POPULAR_MOVIES,
      title: 'Popular Movies',
      movies,
    }));
}

export const searchMoviesAction = (event, search) => (dispatch) => {
  event.preventDefault();
  if (!search.trim()) return;

  const url = `http://localhost:3001/searchMovies?query=${search}`;

  // Return Promise for chaining
  return _getUrl(url)
    .then((movies) => {
      dispatch({
        type: SEARCH_MOVIES,
        title: `Search Results for "${search}"`,
        movies,
      })
    });
}

export const getMovieAction = (movieId) => (dispatch) => {
  const url = `http://localhost:3001/findMovie?query=${movieId}`;
  _getUrl(url)
    .then(({ title, tagline, release_date, overview, video }) => {
      dispatch({
        type: GET_MOVIE,
        data: { title, tagline, release_date, overview, video },
      })
    });
}
