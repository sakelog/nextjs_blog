import { createReducer } from '@reduxjs/toolkit';
import { init, open, close } from './actions';
import { drawerState } from './types';

export const initialState: drawerState = {
  show: false,
  loading: false,
  error: false,
  errorMessage: '',
};

const drawerReducer = createReducer<drawerState>(initialState, (builder) => {
  builder
    .addCase(init, (state) => {
      state.show = initialState.show;
    })
    .addCase(open, (state) => {
      state.show = true;
    })
    .addCase(close, (state) => {
      state.show = false;
    });
});

export default drawerReducer;
