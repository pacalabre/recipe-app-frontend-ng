import { createAction, props } from '@ngrx/store';

export const updateUser = createAction(
  'Update User',
  // user will be of IUsers
  props<{ user: any }>()
);
