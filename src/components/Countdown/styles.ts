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
    font-size: 8.5rem;
    text-align: center;
    display: flex;
    
  }

  > div span {
    flex: 1;
    width: 90px;
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
