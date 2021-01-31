import { Router } from 'next/router';
import state from '@state/ducks/index';
import { Dispatch } from 'react';

// page生成時のuseEffect内側
const windowSizeState = state.windowSizeState;

const PageInit = (dispatch: Dispatch<any>) => {
  Router.events.on('routeChangeStart', () => {
    handleSetWindowSize(dispatch);
  });
  window.addEventListener('load', () => {
    handleSetWindowSize(dispatch);
  });
  window.addEventListener('resize', () => {
    handleSetWindowSize(dispatch);
  });
  window.addEventListener('orientationchange', () => {
    handleSetWindowSize(dispatch);
  });
  return () => {
    Router.events.off('routerChangeStart', () => {
      handleSetWindowSize(dispatch);
    });
    window.removeEventListener('load', () => handleSetWindowSize(dispatch));
    window.removeEventListener('resize', () => {
      handleSetWindowSize(dispatch);
    });
    window.removeEventListener('orientationchange', () => {
      handleSetWindowSize(dispatch);
    });
  };
};

export default PageInit;

const handleSetWindowSize = (dispatch: Dispatch<any>) => {
  dispatch(windowSizeState.windowSizeActions.setWindowSize());
};
