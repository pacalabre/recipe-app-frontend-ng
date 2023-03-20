import { createReducer, on } from '@ngrx/store';
import * as Actions from './actions';

export const initalState = {
  user: null,
};

export const reducers = createReducer(
  initalState,
  on(Actions.updateUser, (_state, payload) => ({
    user: payload.user,
  }))
);
