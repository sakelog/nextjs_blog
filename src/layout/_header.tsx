import { useState, useEffect } from 'react';
import { Router } from 'next/router';
import { SwipeableDrawer } from '@material-ui/core';

import SiteLogo from '@layout/headerNav/siteLogo';
import Search from '@layout/headerNav/search/search';
import DrawerList from '@layout/headerNav/drawerList';

import { HiMenu } from 'react-icons/hi';

const Header = () => {
  const [drawerState, setDrawerState] = useState(false);
  const handleOpen = () => setDrawerState(true);
  const handleClose = () => setDrawerState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () =>
      handleClose()
    );
    return Router.events.off('routeChangeStart', () =>
      handleClose()
    );
  }, []);
  return (
    <header className="sticky top-0 z-40">
      <nav
        className="text-white bg-theme flex items-center space-x-2
                    overflow-x-hidden p-2"
      >
        <SiteLogo />
        <Search />
        <div className="hidden sm:block">
          <DrawerList />
        </div>
        <div className="sm:hidden">
          <HiMenu aria-label="Menu" onClick={handleOpen} />
        </div>
        <div className="sm:hidden">
          <SwipeableDrawer
            open={drawerState}
            onClose={handleClose}
            onOpen={handleOpen}
            anchor={'right'}
          >
            <DrawerList />
          </SwipeableDrawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
/*
import config from '@components/config';

const Header: React.FC = () => {

  return (
    <>
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
*/
