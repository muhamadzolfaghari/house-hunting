// import classes from './ManageLayout.module.scss';

import Header from '../Header';
import React, { FC } from 'react';
import ManageDrawer from './ManageDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import usePropertyEffects from '../../../../hooks/usePropertyEffects';

const ManageLayout: FC = ({ children }) => {
  usePropertyEffects();

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <ManageDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default ManageLayout;
