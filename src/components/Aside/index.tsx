import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  Footer,
  FooterItem,
  Header,
  MenuContainer,
  Title,
  Div
} from "./styles";

import { BiHomeAlt } from "react-icons/bi";
import { FiVolume2, FiPauseCircle, FiStopCircle } from "react-icons/fi";
import { Countdown } from "../Countdown/index";
import { CountdownProvider } from "../../contexts/index";
import Link from "next/link";
import { LevelingContext } from "../../contexts/LevelingContext";

function Aside() {
  const { level } = useContext(LevelingContext);

  return (
    <Container>
      <Header>
        <Title>Nível {level}</Title>
      </Header>
      <MenuContainer>
        <CountdownProvider>
          <Countdown />
        </CountdownProvider>
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
