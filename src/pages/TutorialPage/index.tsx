import React from 'react';

import { Grid } from './styles';

import MainHeader from '../../components/MainHeader';
import Aside from '../../components/Aside';
import Game from '../../components/Game';
import { LevelingProvider } from '../../contexts/LevelingContext';
import { Card } from '../../components/Game/styles';

import {
  GiFeline as Cat,
  GiPig as Pig,
} from "react-icons/gi";

const cardBack = '/images/cardBack.svg'

function showCards() {
  return (
    <>
      <Card id="card" className="memory-card" data-framework="cat" >
        <Cat size={140} className="front-face" />
        <img src={cardBack} alt="cardBack" className="back-face" />
      </Card>
      <Card id="card" className="memory-card" data-framework="cat" >
        <Cat size={140} className="front-face" />
        <img src={cardBack} alt="cardBack" className="back-face" />
      </Card>
      <Card id="card" className="memory-card" data-framework="pig" >
        <Pig size={140} className="front-face" />
        <img src={cardBack} alt="cardBack" className="back-face" />
      </Card>
      <Card id="card" className="memory-card" data-framework="pig" >
        <Pig size={140} className="front-face" />
        <img src={cardBack} alt="cardBack" className="back-face" />
      </Card>
    </>
  );
}

function TutorialPage({ children }) {
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

export default TutorialPage;
