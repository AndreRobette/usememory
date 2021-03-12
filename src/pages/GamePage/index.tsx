import React from 'react';

import { Grid } from './styles';

import MainHeader from '../../components/MainHeader';
import Aside from '../../components/Aside';
import Game from '../../components/Game';

function GamePage({ children }) {
  return (
    <Grid>
      <MainHeader/>
      <Aside/>
      <Game>
        {children}
      </Game>
    </Grid>
  );
};

export default GamePage;
