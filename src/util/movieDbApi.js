export function getPopularMovies() {
  const url = 'http://localhost:3001/popularMovies';
  return getMovieResults(url);
}

export function updateMovieResults(search) {
  const url = `http://localhost:3001/searchMovies?query=${search}`;
  return getMovieResults(url);
}

export function getMovieResults(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(console.error);
}