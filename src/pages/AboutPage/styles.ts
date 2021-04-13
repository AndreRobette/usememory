import styled from "styled-components";
import MainHeader from "../../components/MainHeader";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100vh;

  > h1 {
    font-size: 4.5rem;
    font-weight: 500;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  }

  > h1 > span:nth-child(2) {
    color: var(--green);
  }

  > h1 > span {
    color: var(--brown);
    transition: 0.2s;

    :hover {
      transform: scale(1.1);
      filter: brightness(1.3);
    }
  }

  > h1 > span:nth-child(4) {
    color: var(--text);
  }
`;

export const MainText = styled.h2`
  max-width: 39.375rem;
  font-size: 2.5rem;
  font-weight: 500;

  text-align: center;
`;

export const CollaboratorsContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 55.313rem;
  width: 100%;
  align-items: center;

  > h1 {
    font-size: 3rem;
    font-weight: 500;
    transition: 0.2s;
    cursor: default;

    :hover {
      filter: brightness(1.3);
    }
  }

  > hr {
    width: 100%;
    margin-bottom: 35px;
  }
`;

export const Collaborators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CollaboratorProfile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  cursor: pointer;

  max-width: 160px;
  width: 100%;

  transition: 0.2s;

  > img {
    max-width: 140px;
  }

  > h2 {
    font-size: 1.1rem;
  }

  :hover {
    transform: scale(1.1);

    > h2 {
        filter: brightness(1.3);
    }
  }
`;

export const More = styled.a`
  cursor: pointer;
  margin-top: 0;
  font-size: 2rem;
  font-weight: bold;
`;




  
