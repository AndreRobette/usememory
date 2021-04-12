import styled from "styled-components";

const Container = styled.div`
    width: 850px;
    height: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    perspective: 1000px;

    > .memory-card.flip {
        transform: rotateY(180deg);
    }
`;

const Card = styled.a`
    background-color: var(--light-green);

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 165px;
    height: 223.33px;

    border-radius: 10px;

    margin: 1.25rem;

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

export { Container, Card };
