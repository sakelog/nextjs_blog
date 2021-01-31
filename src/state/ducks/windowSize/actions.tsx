import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const setWindowSize = createAction(types.SET_WINDOW_SIZE);

export default { setWindowSize };
