import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    iframe{
        width: 70%;
        height: 70%;
        margin-top: 50px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 65px;
    width: 90vw;
`;

export const Icon = styled.img`
    cursor: pointer;
`;
