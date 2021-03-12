import React from 'react';

import { Container, Icon, Score } from './styles';

function MainHeader() {
  return (
    <Container>
      <Icon src="/images/HeaderIcon.svg" alt="usememory"/>
      <Score>Pontuação: 100</Score>
    </Container>
  );
};

export default MainHeader;
