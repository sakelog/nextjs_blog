import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import reducer from './ducks/index';

const rootReducer = combineReducers({
  windowSizeState: reducer.windowSizeState.windowSizeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export default createStore;
