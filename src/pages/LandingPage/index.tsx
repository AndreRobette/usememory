import React from "react";
import Link from "next/link";

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
            TUTORIAL
          </Button>
        </Link>
        <Link href="/GamePage">
          <Button color="#38D438" title="#684500">
            JOGAR
          </Button>
        </Link>
        <Link href="AboutPage">
          <Button color="#684500" title="#38D438">
            SAIBA MAIS
          </Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
