import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-image: url(/images/background.svg);
  background-repeat: no-repeat;
  background-position: center;

  > h1 {
    font-size: 6rem;
    font-weight: 500;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    margin-bottom: 8.75rem;

    cursor: default;
  }

  > h1 > span:first-child {
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

  > h1 > span:last-child {
    color: var(--text);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 2.62rem;
  font-weight: bold;

  background: ${(props) => props.color};
  color: ${(props) => props.title};

  padding: 0.313rem 1.25rem;
  margin-bottom: 20px;

  border: 0;
  border-radius: 10px;

  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

  transition: 0.2s;

  :hover {
    transform: scale(1.1);
    filter: brightness(1.3);
  }
`;
