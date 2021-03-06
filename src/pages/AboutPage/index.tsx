import React from "react";

import {
  CollaboratorProfile,
  Collaborators,
  CollaboratorsContainer,
  Container,
  MainText,
} from "./styles";

const AboutPage: React.FC = () => {
  return (
    <Container>
      <h1>
        O que é o <span></span>
        <span>use</span>
        <span>MEMO</span>
        <span>ry</span>
      </h1>
      <MainText>
        Nosso projeto consiste em desenvolver um jogo da memória para pessoas
        com deficiência intelectual
      </MainText>
      <CollaboratorsContainer>
        <h1>Colaboradores</h1>
        <hr />
        <Collaborators>
          <CollaboratorProfile
            href="https://github.com/AndreRobette"
            target="_blank"
          >
            <img src="/images/Andre.png" alt="André Robette" />
            <h2>André Robette</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://github.com/PietroSouza"
            target="_blank"
          >
            <img src="/images/Pietro.png" alt="André Robette" />
            <h2>Gabriel P. de Souza</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://github.com/julyabm"
            target="_blank"
          >
            <img src="/images/Julya.png" alt="André Robette" />
            <h2>Julya Marssona</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://github.com/LucasJantschChitolina"
            target="_blank"
          >
            <img src="/images/Lucas.png" alt="André Robette" />
            <h2>Lucas Chitolina</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://github.com/AndreRobette"
            target="_blank"
          >
            <img src="/images/Putti.png" alt="André Robette" />
            <h2>Mateus J. Putti</h2>
          </CollaboratorProfile>
        </Collaborators>
      </CollaboratorsContainer>
    </Container>
  );
};

export default AboutPage;
