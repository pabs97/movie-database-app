import { GET_MOVIE, ENABLE_BACK_BUTTON } from '../actions/types';

const initialState = {
  title: '',
  tagline: '',
  release_date: '',
  overview: '',
  video: '',
  backButton: false,
};

export default function movieInfo(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_MOVIE:
      return { ...state, ...data };
    case ENABLE_BACK_BUTTON:
      return { ...state, backButton: true };
    default:
      return state;
  }
}
