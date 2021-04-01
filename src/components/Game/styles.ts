import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    perspective: 1000px;

    > .memory-card.flip{
        transform: rotateY(180deg);

    }
`;

const Card = styled.a`
    background-color: var(--light-green);

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 11.563rem;
    height: 11.563rem;
    

    border-radius: 10px;

    margin: 1.25rem;

    transition: all 0.2s;
    transform-style: preserve-3d;
    transition: transform .5s;

    &:hover {
        transform: scale(1.1)
    }

    > svg {
        color: var(--white);
    }

    > .front-face, .back-face {
        position: absolute;
        backface-visibility: hidden;
    }

    > .front-face {
        transform: rotateY(180deg);
    }

`;


export { Container, Card }