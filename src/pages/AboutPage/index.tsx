import Head from "next/head";

import React from "react";


import {
  CollaboratorProfile,
  Collaborators,
  CollaboratorsContainer,
  Container,
  MainText,
  More,
} from "./styles";

const Andre = "/images/andre.png";
const Pietro = "/images/pietro.png";
const Julya = "/images/julya.png";
const Lucas = "/images/lucas.png";
const Mateus = "/images/putti.png";
const artigo = "useMemory.pdf"

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>useMEMOry</title>
      </Head>
  
      <h1>
        O que é o <span></span>
        <span>use</span>
        <span>MEMO</span>
        <span>ry</span>
      </h1>
      <MainText>
      É um jogo da memória online que auxilia no tratamento pedagógico de crianças com deficiência intelectual. Busca ajudar na concentração, raciocínio e memória fotográfica.
      </MainText>

      <More href={artigo} target="_blank">
        Saiba mais
      </More>

      <CollaboratorsContainer>
        <h1>Colaboradores</h1>
        <hr />
        <Collaborators>
          <CollaboratorProfile
            href={"https://www.linkedin.com/in/andr%C3%A9-robette-7137891a1/"}
            target="_blank"
          >
            <img src={Andre} alt="André Robette" />
            <h2>André Robette</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/gabriel-pietro-de-souza-9057431b7/"
            target="_blank"
          >
            <img src={Pietro} alt="Gabriel Pietro" />
            <h2>Gabriel P. de Souza</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/julya-brustolin-marssona-4812361a3/"
            target="_blank"
          >
            <img src={Julya} alt="Julya Brustolin" />
            <h2>Julya Marssona</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/lucaschitolina/"
            target="_blank"
          >
            <img src={Lucas} alt="Lucas Chitolina" />
            <h2>Lucas Chitolina</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/mateus-putti-0a615220a/"
            target="_blank"
          >
            <img src={Mateus} alt="Mateus Putti" />
            <h2>Mateus J. Putti</h2>
          </CollaboratorProfile>
        </Collaborators>
      </CollaboratorsContainer>
    </Container>
  );
};

export default AboutPage;
