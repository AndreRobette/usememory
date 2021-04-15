import React, { useState } from "react";
import Link from "next/link";

import { AiFillPlayCircle, AiFillQuestionCircle } from "react-icons/ai";

import { Button, ButtonContainer, Container, Set, Modal, Text } from "./styles";
import Head from "next/head";

const LandingPage: React.FC = () => {
  const [cookiesModal, setCookiesModal] = useState(true);

  function music(){
    setTimeout(() => {new Audio('/audios/play.ogg').play()}, 1500)
  }
  return (
    <Container>
      {cookiesModal && (
        <Modal>
          <Text>Essa página utiliza cookies de navegação para melhor desempenho no jogo.</Text>
           <Text> Ficará salvo apenas sua pontuação e seu nível.</Text>
        </Modal>
      )}
      <Head>
        <title>useMEMOry</title>
      </Head>
      <h1>
        <span>use</span>
        <span>MEMO</span>
        <span>ry</span>
      </h1>
      <Set>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
        <div>
          <img src="/images/leaf.svg" alt="" />
        </div>
      </Set>
      <ButtonContainer>
        <Link href="/TutorialPage">
          <Button color="#684500" title="#38D438">
            <h4>TUTORIAL</h4> <AiFillQuestionCircle />
          </Button>
        </Link>
        <Link href="/GamePage">
          <Button color="#38D438" title="#684500" onClick={music}>
            <h4>JOGAR</h4> <AiFillPlayCircle />
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
