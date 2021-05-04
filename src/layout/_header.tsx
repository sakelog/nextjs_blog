import { useState, useEffect } from 'react';
import loadable from '@loadable/component';
import { Router } from 'next/router';
import {
  AppBar,
  Toolbar,
  Hidden,
  SwipeableDrawer,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import config from '@component/config';

const SiteLogo = loadable(() => import('./headerNav/siteLogo'), {
  fallback: <>{config.title}</>,
});
const Search = loadable(() => import('./headerNav/search/search'), {
  fallback: <CircularProgress color="secondary" />,
});
const DrawerList = loadable(() => import('./headerNav/drawerList'), {
  fallback: <CircularProgress color="secondary" />,
});

import { headerStyles as useStyles } from '@styles/project/header.styles';

const Header: React.FC = () => {
  const styles = useStyles();
  const [drawerState, setDrawerState] = useState(false);
  const handleOpen = () => setDrawerState(true);
  const handleClose = () => setDrawerState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => handleClose());
    return Router.events.off('routeChangeStart', () => handleClose());
  }, []);
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <SiteLogo />
          <Search />
          <Hidden xsDown>
            <DrawerList />
          </Hidden>
          <Hidden smUp>
            <IconButton color="inherit" onClick={handleOpen} aria-label="Menu">
              <MenuIcon className={styles.menuIcon} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <SwipeableDrawer
          open={drawerState}
          onClose={handleClose}
          onOpen={handleOpen}
          anchor={'right'}
        >
          <DrawerList />
        </SwipeableDrawer>
      </Hidden>
    </>
  );
};

export default Header;
