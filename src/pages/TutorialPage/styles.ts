import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    

    iframe{
        width: 800px;
        height: 400px;
        margin-top: 50px;
    }
`;

export const Video = styled.div`
    /* width: 100%;
    height: 60px;
    margin-top: 200px; */
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    align-items: center;
    transform: translate(-50%);
    left: 50%;
    top: 0;

    padding: 20px 65px;
    width: 90vw;
`;

export const Icon = styled.img`
    cursor: pointer;
`;
