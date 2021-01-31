import { createReducer } from '@reduxjs/toolkit';
import { setWindowSize } from './actions';
import { windowSizeState } from './types';
import { getWindowSize } from '@lib/getWindowSize';

export const initialState: windowSizeState = {
  width: 0,
  height: 0,
  loading: false,
  error: false,
  errorMessage: '',
};

const windowSizeReducer = createReducer<windowSizeState>(
  initialState,
  (builder) => {
    builder.addCase(setWindowSize, (state) => {
      state.width = getWindowSize().width;
      state.height = getWindowSize().height;
    });
  }
);

export default windowSizeReducer;
