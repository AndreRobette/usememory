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
    align-items: flex-start;
`;

export const Title = styled.h1`    
    font-weight: 500;
    font-size: 48px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    height: 80%;
`;

export const Div = styled.div`
    width: 80%;
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



export default function teste() {

}