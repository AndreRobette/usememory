import Head from 'next/head';
import React from 'react';

import { Container } from './styles';

const TutorialPage: React.FC = () => {
  return (
   
    <Container>
       <Head>
        <title>useMEMOry</title>
      </Head>
      <h1>TutorialPage</h1>
    </Container>
  );
};

export default TutorialPage;
