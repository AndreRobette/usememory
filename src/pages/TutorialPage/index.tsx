import React from 'react';
import Link from "next/link";

import { Container, Header, Icon } from './styles';

function TutorialPage({ children }) {
  return (
    <Container>
      <Header>
        <Link href="/LandingPage">
          <Icon src="/images/headerIcon.svg" alt="usememory" />
        </Link>
        <Link href="/LandingPage">Retornar</Link>
      </Header>
      <iframe src="https://www.youtube.com/embed/fk0aWk2yNQk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Container>
  );
};

export default TutorialPage;
