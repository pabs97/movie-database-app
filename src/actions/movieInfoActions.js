import { ENABLE_BACK_BUTTON } from './types';

export const enableBackButtonAction = () => (dispatch) => {
  // TODO: disable if we don't have the correct history
  dispatch({ type: ENABLE_BACK_BUTTON })
}