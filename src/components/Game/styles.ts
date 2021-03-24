import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
`;

const Card = styled.a`
    background-color: var(--light-green);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 11.563rem;
    height: 11.563rem;
    

    border-radius: 10px;

    margin: 1.25rem;

    transition: all 0.2s;

    :hover {
        transform: scale(1.1)
    }

    > svg {
        color: var(--white);
    }
`;

const CardBack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 7.5rem;
    height: 7.5rem;

    > span:nth-child(1) {
        display: flex;
        color: var(--green);
        font-weight: 500;
        font-size: 1.5rem;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        justify-content: flex-start;
        align-items: center;
        line-height: 25px;
    }

    > span:nth-child(2) {
        display: flex;
        color: var(--brown);
        font-weight: 700;
        font-size: 1.5rem;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        justify-content: center;
        align-items: center;
        line-height: 25px;
    }

    > span:nth-child(3) {
        display: flex;
        color: var(--text);
        font-weight: 500;
        font-size: 1.5rem;
        text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        justify-content: flex-end;
        align-items: center;
        line-height: 20px;
    }
`;

export { Container, Card, CardBack }