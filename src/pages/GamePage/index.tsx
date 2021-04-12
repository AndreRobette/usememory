import React from "react";
import Head from "next/head";

import { Grid } from "./styles";

import MainHeader from "../../components/MainHeader";
import Aside from "../../components/Aside";
import Game from "../../components/Game";
import { LevelingProvider } from "../../contexts/LevelingContext";

function GamePage({ children }) {
  return (
    <LevelingProvider>
      <Head>
        <title>useMEMOry</title>
      </Head>
      <Grid>
        <MainHeader />
        <Aside />
        <Game>{children}</Game>
      </Grid>
    </LevelingProvider>
  );
}

export default GamePage;
