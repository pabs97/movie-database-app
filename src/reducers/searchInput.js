import { HANDLE_TYPING } from '../actions/types';

const initialState = {
  searchValue: '',
  // results: []
};

export default function searchInput(state = initialState, action) {
  const { type, searchValue } = action;

  switch (type) {
    case HANDLE_TYPING:
      return { ...state, searchValue };
    default:
      return state;
  }
}
