import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0%{ 
      opacity: 0;
      top: -10%;
      transform: translateX(20px) rotate(0deg);
    }
    10%{
      opacity: 1;
    }
    20%{ 
      transform: translateX(-20px) rotate(45deg);
    }
    40%{ 
      transform: translateX(-20px) rotate(90deg);
    }
    60%{ 
      transform: translateX(20px) rotate(180deg);
    }
    80%{ 
      transform: translateX(-20px) rotate(180deg);
    }
    100%{
      opacity: 0;
      top: 110%;
      transform: translateX(-20px) rotate(225deg);
    }
`;

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

  overflow: hidden;

  > h1 {
    font-size: 6rem;
    font-weight: 500;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    margin-bottom: 8.75rem;

    cursor: default;

    transition: 0.2s;
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

export const Set = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;

  > div {
    position: absolute;
    display: block;
  }

  > div:nth-child(1) {
    left: 30%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -7s;
  }
  > div:nth-child(2) {
    left: 24%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -9s;
  }
  > div:nth-child(3) {
    left: 37%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -5s;
  }
  > div:nth-child(4) {
    left: 40%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -3s;
  }
  > div:nth-child(5) {
    left: 52%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -1s;
  }
  > div:nth-child(6) {
    left: 65%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -11s;
  }
  > div:nth-child(7) {
    left: 68%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -6s;
  }
  > div:nth-child(8) {
    left: 70%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -12s;
  }
  > div:nth-child(9) {
    left: 56%;
    animation: ${animate} 15s linear infinite;
    animation-delay: -4s;
  }

`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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

  h4 {
    margin-right: 10px;
  }

  svg {
    font-size: 2.5rem;
  }

  :hover {
    transform: scale(1.1);
    filter: brightness(1.3);
  }
`;
