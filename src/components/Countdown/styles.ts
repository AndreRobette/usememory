import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #2E384D;


  > div {
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    

    background: var(--timer);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 6.5rem;
    text-align: center;
    display: flex;
    width: 140px;
    
  }

  > div span {
    flex: 1;
    width: 30px;
  }

  > div span:first-child {
    border-right: 2px solid var(--aside);
  }

  > div span:last-child {
    border-left: 2px solid var(--aside);
  }

  > span {
    font-size: 6.5rem;
    margin: 0 0.5rem;
  }
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
        transform: scale(1.02);
        filter: contrast(1.5);
    }
`;

export const Overlay = styled.div`
    background: rgba(242, 243, 245, 0.8);
    z-index:5;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background: var(--white);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    
`;


export const Strong = styled.strong`
    font-size: 2.25rem;
    color: var(--title);
`;

export const Button = styled.button`
    background: var(--light-green);
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    font-size: 0;

    transition: 0.2s;

    :hover {
        transform: scale(1.02);
        filter: contrast(1.5);
    }

`;

