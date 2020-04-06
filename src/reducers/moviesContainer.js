import { GET_POPULAR_MOVIES, SEARCH_MOVIES } from '../actions/types';

const initialState = {
  movies: [],
  title: '',
};

export default function moviesContainer(state = initialState, action) {
  const { type, title, movies } = action;

  switch (type) {
    case GET_POPULAR_MOVIES:
    case SEARCH_MOVIES:
      return { ...state, movies, title };
    default:
      return state;
  }
}
