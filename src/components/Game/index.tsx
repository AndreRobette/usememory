import React, { useContext } from "react";

import {
    GiFeline as Cat,
    GiPig as Pig,
    GiSheep as Sheep,
    GiRooster as Rooster,
    GiCow as Cow,
    GiGorilla as Gorilla,
    GiDuck as Duck,
    GiFinch as Bird,
    GiSnake as Snake,
    GiElephant as Elephant,
} from "react-icons/gi";
import { CountdownContext, CountdownProvider } from "../../contexts";

import { Container, Card, CardBack } from "./styles";

// window.onload{
//     startCountdown();
// }

const GamePage: React.FC = () => {
const {minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown} = useContext(CountdownContext)

    return (
        <CountdownProvider>
        <Container>
            <Card onClick={startCountdown}>
                <Cat size={140}/>
            </Card>
            <Card>
                <Pig size={140}/>
            </Card>
            <Card>
                <Sheep size={140}/>
            </Card>
            <Card>
                <Rooster size={140}/>
            </Card>
            <Card>
                <Cow size={140}/>
            </Card>
            <Card>
                <Gorilla size={140}/>
            </Card>
            <Card>
                <Duck size={140}/>
            </Card>
            <Card>
                <Bird size={140}/>
            </Card>
            <Card>
                <Snake size={140}/>
            </Card>
            <Card>
                <Elephant size={140}/>
            </Card>
            <Card>
              <CardBack>
                <span>use</span>
                <span>MEMO</span>
                <span>ry</span>
              </CardBack>
            </Card>
            <Card>
              <CardBack>
                <span>use</span>
                <span>MEMO</span>
                <span>ry</span>
              </CardBack>
            </Card>
        </Container>
    </CountdownProvider>
    );
};

export default GamePage;
