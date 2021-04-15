import Head from 'next/head';
import React from 'react';
import MainHeader from '../../components/MainHeader';

import { Container } from './styles';

function TutorialPage({ children }) {
  return (
    <Container>
      <Head>
        <title>useMEMOry</title>
      </Head>
      <MainHeader />
      <h1>TutorialPage</h1>
    </Container>
  );
};

export default TutorialPage;
