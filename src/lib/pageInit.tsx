import { Router } from 'next/router';
import state from '@state/ducks/index';
import { Dispatch } from 'react';

type funcType = (dispatch: Dispatch<any>) => () => void;

// page生成時のuseEffect内側
const windowSizeState = state.windowSizeState;
const drawerState = state.drawerState;

const PageInit: funcType = (dispatch) => {
  handleSetWindowSize(dispatch);
  handleInitDrawer(dispatch);
  Router.events.on('routeChangeStart', () => {
    handlePageInit(dispatch);
  });
  window.addEventListener('load', () => {
    handlePageInit(dispatch);
  });
  window.addEventListener('resize', () => {
    handlePageInit(dispatch);
  });
  window.addEventListener('orientationchange', () => {
    handlePageInit(dispatch);
  });
  return () => {
    Router.events.off('routerChangeStart', () => {
      handlePageInit(dispatch);
    });
    window.removeEventListener('load', () => handleSetWindowSize(dispatch));
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
  handleInitDrawer(dispatch);
};

const handleInitDrawer = (dispatch: Dispatch<any>) => {
  dispatch(drawerState.drawerOperations.init());
};
const handleSetWindowSize = (dispatch: Dispatch<any>) => {
  dispatch(windowSizeState.windowSizeOperations.setWindowSize());
};
