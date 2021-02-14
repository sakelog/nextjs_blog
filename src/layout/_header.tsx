import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
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

const SiteLogo = dynamic(() => import('./headerNav/siteLogo'), {
  loading: () => <>{config.title}</>,
});
const Search = dynamic(() => import('./headerNav/search/search'), {
  loading: () => <CircularProgress color="secondary" />,
});
const DrawerList = dynamic(() => import('./headerNav/drawerList'), {
  loading: () => <CircularProgress color="secondary" />,
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
            <IconButton color="inherit" onClick={handleOpen}>
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
