import React from "react";

import {
  Container,
  Footer,
  FooterItem,
  Header,
  MenuContainer,
  MenuItem,
  Title,
  Div
} from "./styles";

import { BiHomeAlt } from "react-icons/bi";
import { FiVolume2, FiPauseCircle, FiStopCircle } from "react-icons/fi";
import { Countdown } from "../Countdown/index";
import { CountdownProvider } from "../../contexts/index";
import Link from "next/link";

function Aside() {
  return (
    <Container>
      <Header>
        <Title>Nível 1</Title>
      </Header>
      <MenuContainer>
      <CountdownProvider>
        <Countdown />
      </CountdownProvider>
      <Div>
        <MenuItem color="#F1FF53">
          Pausar <FiPauseCircle />
        </MenuItem>
        <MenuItem color="#FF5757">
          Reiniciar <FiStopCircle />
        </MenuItem>
        </Div>
      </MenuContainer>

      <Footer>
        <FooterItem>
          <Link href="LandingPage">
            <BiHomeAlt />
          </Link>
        </FooterItem>
        <FooterItem>
          <FiVolume2 />
        </FooterItem>
      </Footer>
    </Container>
  );
}

export default Aside;
