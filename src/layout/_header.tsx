import { useState, useEffect } from 'react';
import { Router } from 'next/router';
import dynamic from 'next/dynamic';
import { AppBar, Toolbar, Hidden } from '@material-ui/core';
const IconButton = dynamic(() => import('@material-ui/core/IconButton'));
const SwipeableDrawer = dynamic(
  () => import('@material-ui/core/SwipeableDrawer')
);
import { MdMenu } from 'react-icons/md';

const SiteLogo = dynamic(() => import('./headerNav/siteLogo'));
const Search = dynamic(() => import('@layout/headerNav/search/search'));
const DrawerList = dynamic(() => import('./headerNav/drawer'));

const Header: React.FC = () => {
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
          <Hidden smUp>
            <IconButton color="inherit" onClick={handleOpen}>
              <MdMenu />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            <DrawerList />
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
