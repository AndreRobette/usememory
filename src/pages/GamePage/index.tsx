import React from 'react';

import { Grid } from './styles';

import MainHeader from '../../components/MainHeader';
import Aside from '../../components/Aside';
import Game from '../../components/Game';
import { LevelingProvider } from '../../contexts/LevelingContext';

function GamePage({ children }) {

  return (
    <LevelingProvider>
      <Grid>
        <MainHeader />
        <Aside />
        <Game>
          {children}
        </Game>
      </Grid>
    </LevelingProvider>
  );
};

export default GamePage;
