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

const Container = styled.div`
    display: grid;
    margin: auto auto;

    perspective: 1000px;

    > .memory-card.flip {
        transform: rotateY(180deg);
    }
`;

const Card = styled.a`
    background-color: var(--light-green);
    order: ${props => props.theme};

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;

    border-radius: 10px;

    margin: 10px;

    cursor: pointer;

    transition: all 0.2s;
    transform-style: preserve-3d;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    > svg {
        color: var(--white);
    }

    > .front-face,
    .back-face {
        position: absolute;
        backface-visibility: hidden;
    }

    > .front-face {
        transform: rotateY(180deg);
    }
`;

export const Modal = styled.div`
    display: flex;
    position: absolute;
    background: var(--background);
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    z-index: 1;

    > img {
        width: 130px;
    }
`;

export const Title = styled.h1`
    color: #38d438;
    font-size: 50px;
    margin-top: 20px;
`;

export const Text = styled.h2`
    color: #5c5c5c;
    margin-top: 15px;
    font-size: 30px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    font-weight: bold;

    background: var(--light-green);
    color: ${(props) => props.title};

    padding: 0.313rem 1.25rem;
    margin-top: 20px;

    border: 0;
    border-radius: 10px;

    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    transition: 0.2s;

    h4 {
        margin-right: 10px;
    }

    svg {
        font-size: 2rem;
        margin-left: 10px;
    }

    :hover {
        transform: scale(1.1);
        filter: brightness(1.3);
    }
`;

export const FooterItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 90px;

    border-radius: 10px;
    border: 0;

    transition: 0.2s;

    :hover {
        transform: scale(1.1);
        filter: contrast(1.5);
    }
`;

export const ModalCompleted = styled.div`
    display: flex;
    position: absolute;
    background-color: var(--background);
    background-image: url(/images/background.svg);
    background-repeat: no-repeat;
    background-position: center;
    
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
    
`;

export const ContainerText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    border-radius: 10px;
    background: rgba(242, 243, 245, 0.8);
`;

export const TitleCompleted = styled.h1`
    color: #684500;
    font-size: 70px;
    margin-top: 0;
`;

export const TextCompleted = styled.h2`
    color: black;
    margin-top: 10px;
    font-size: 30px;
`;

export const TextPoints = styled.h2`
    color: black;
    margin-top: 10px;
    font-size: 20px;
`;

export const ButtonCompleted = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: bold;
    padding: 15px;

    background: var(--light-green);
    color: var(--background);

    border: 0;
    border-radius: 10px;

    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

    > svg {
        margin-left: 10px;
    }

`;


export { Container, Card };

