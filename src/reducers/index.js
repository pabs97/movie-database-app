import { combineReducers } from 'redux';
import moviesContainer from './moviesContainer';
import searchInput from './searchInput';
import movieInfo from './movieInfo';

export default combineReducers({
  moviesContainerReducer: moviesContainer,
  searchInputReducer: searchInput,
  movieInfoReducer: movieInfo,
});
