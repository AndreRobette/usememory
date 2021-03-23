import React from 'react';

import { Container, Footer, FooterItem, Header, MenuContainer, MenuItem, Title } from './styles';

import { BiHomeAlt } from "react-icons/bi";
import { FiVolume2, FiPauseCircle, FiStopCircle } from "react-icons/fi";

function Aside() {
  return (
    <Container>
      <Header><Title>Nível 1</Title></Header>
      <MenuContainer>
        <MenuItem color='#F1FF53'>
          Pausar <FiPauseCircle/>
        </MenuItem>
        <MenuItem color='#FF5757'>
          Desistir<FiStopCircle/>
        </MenuItem>
      </MenuContainer>

      <Footer> 
        <FooterItem>
          <BiHomeAlt/>
        </FooterItem>
        <FooterItem>
          <FiVolume2/>
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default Aside;
