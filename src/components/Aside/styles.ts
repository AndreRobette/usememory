import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    
    display: flex;
    flex-direction: column;

    background-color: var(--aside);
    padding: 1.875rem;

    justify-content: space-between;

    overflow: hidden;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    
    height: 10%;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`    
    font-weight: 500;
    font-size: 48px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 80%;
`;

export const MenuItem = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80px;
    
    background-color: ${(props) => props.color};
    color: var(--title);
    border-radius: 10px;
    border: 0;

    margin: 20px 0;
    padding: 20px;

    font-weight: 500;
    font-size: 2rem;

    transition: 0.2s;

    :hover {
        filter: contrast(1.5);
    }
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
`;

export const FooterItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    font-size: 45px;

    border-radius: 10px;
    border: 0;
    
    transition: 0.2s;

    :hover {
        transform: scale(1.1);
        filter: contrast(1.5);
    }
`;
