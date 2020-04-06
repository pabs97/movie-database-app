import { HANDLE_TYPING } from './types';

export const handleSearchTypingAction = (event) => (dispatch) => {
  event.preventDefault();
  const { value } = event.target;

  if (value) {
    dispatch({
      type: HANDLE_TYPING,
      searchValue: value,
    });
  }
}
