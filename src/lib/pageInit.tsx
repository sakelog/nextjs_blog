import state from '@state/ducks/index';
import { Dispatch } from 'react';

type funcType = (dispatch: Dispatch<any>) => () => void;

// page生成時のuseEffect内側
const windowSizeState = state.windowSizeState;

const PageInit: funcType = (dispatch) => {
  handleSetWindowSize(dispatch);
  window.addEventListener('resize', () => {
    handlePageInit(dispatch);
  });
  window.addEventListener('orientationchange', () => {
    handlePageInit(dispatch);
  });
  return () => {
    window.removeEventListener('resize', () => {
      handlePageInit(dispatch);
    });
    window.removeEventListener('orientationchange', () => {
      handlePageInit(dispatch);
    });
  };
};

export default PageInit;

const handlePageInit = (dispatch: Dispatch<any>) => {
  handleSetWindowSize(dispatch);
};

const handleSetWindowSize = (dispatch: Dispatch<any>) => {
  dispatch(windowSizeState.windowSizeOperations.setWindowSize());
};
