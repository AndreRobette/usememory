import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 75% auto;
    grid-template-rows: 130px auto;
    
    grid-template-areas:
    'MH AS'
    'CT AS';

    height: 100vh;
`;

