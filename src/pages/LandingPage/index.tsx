import React from "react";
import Link from "next/link";

import { AiFillPlayCircle, AiFillQuestionCircle } from "react-icons/ai";

import { Button, ButtonContainer, Container, Set } from "./styles";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <h1>
        <span>use</span>
        <span>MEMO</span>
        <span>ry</span>
      </h1>
      <Set>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
        <div><img src="/images/leaf.svg" alt=""/></div>
      </Set>
      <ButtonContainer>
        <Link href="/TutorialPage">
          <Button color="#684500" title="#38D438">
            <h4>TUTORIAL</h4> <AiFillQuestionCircle/>
          </Button>
        </Link>
        <Link href="/GamePage">
          <Button color="#38D438" title="#684500">
          <h4>JOGAR</h4> <AiFillPlayCircle/>
          </Button>
        </Link>
        <Link href="/AboutPage">
          <Button color="#684500" title="#38D438">
          <h4>SAIBA MAIS</h4>
          </Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
