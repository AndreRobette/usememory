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
            href="https://www.linkedin.com/in/andr%C3%A9-robette-7137891a1/"
            target="_blank"
          >
            <img src="/images/Andre.png" alt="André Robette" />
            <h2>André Robette</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/gabriel-pietro-de-souza-9057431b7/"
            target="_blank"
          >
            <img src="/images/Pietro.png" alt="Gabriel Pietro" />
            <h2>Gabriel P. de Souza</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/julya-brustolin-marssona-4812361a3/"
            target="_blank"
          >
            <img src="/images/Julya.png" alt="Julya Brustolin" />
            <h2>Julya Marssona</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/lucaschitolina/"
            target="_blank"
          >
            <img src="/images/Lucas.png" alt="Lucas Chitolina" />
            <h2>Lucas Chitolina</h2>
          </CollaboratorProfile>
          <CollaboratorProfile
            href="https://www.linkedin.com/in/mateus-putti-0a615220a/"
            target="_blank"
          >
            <img src="/images/Putti.png" alt="Mateus Putti" />
            <h2>Mateus J. Putti</h2>
          </CollaboratorProfile>
        </Collaborators>
      </CollaboratorsContainer>
    </Container>
  );
};

export default AboutPage;
