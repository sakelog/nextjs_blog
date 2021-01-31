import { Router } from 'next/router';
import state from '@state/ducks/index';
import { Dispatch } from 'react';

// page生成時のuseEffect内側
const windowSizeState = state.windowSizeState;
const drawerState = state.drawerState;

const PageInit = (dispatch: Dispatch<any>) => {
  Router.events.on('routeChangeStart', () => {
    handleSetWindowSize(dispatch);
    handleInitDrawer(dispatch);
  });
  window.addEventListener('load', () => {
    handleSetWindowSize(dispatch);
    handleInitDrawer(dispatch);
  });
  window.addEventListener('resize', () => {
    handleSetWindowSize(dispatch);
    handleInitDrawer(dispatch);
  });
  window.addEventListener('orientationchange', () => {
    handleSetWindowSize(dispatch);
    handleInitDrawer(dispatch);
  });
  return () => {
    Router.events.off('routerChangeStart', () => {
      handleSetWindowSize(dispatch);
      handleInitDrawer(dispatch);
    });
    window.removeEventListener('load', () => handleSetWindowSize(dispatch));
    window.removeEventListener('resize', () => {
      handleSetWindowSize(dispatch);
      handleInitDrawer(dispatch);
    });
    window.removeEventListener('orientationchange', () => {
      handleSetWindowSize(dispatch);
      handleInitDrawer(dispatch);
    });
  };
};

export default PageInit;

const handleInitDrawer = (dispatch: Dispatch<any>) => {
  dispatch(drawerState.drawerOperations.init());
};
const handleSetWindowSize = (dispatch: Dispatch<any>) => {
  dispatch(windowSizeState.windowSizeActions.setWindowSize());
};
