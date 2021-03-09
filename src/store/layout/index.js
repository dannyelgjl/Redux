import { createAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  showMessage: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.SHOW_MESSAGE:
      return {...state, showMessage: true};
    case Types.HIDE_MESSAGE:
      return {...state, showMessage: false};
    default:
      return state;
  }
};

export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

