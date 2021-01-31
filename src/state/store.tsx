import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import reducer from './ducks/index';

const rootReducer = combineReducers({
  windowSizeState: reducer.windowSizeState.windowSizeReducer,
  drawerState: reducer.drawerState.drawerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const createStore = (): Store => {
  const middlewareList = [...getDefaultMiddleware(), logger];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export default createStore;
