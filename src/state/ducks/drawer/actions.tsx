import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const init = createAction(types.INIT);
export const open = createAction(types.OPEN);
export const close = createAction(types.CLOSE);

export default { init, open, close };
