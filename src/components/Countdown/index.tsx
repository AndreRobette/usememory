import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts/index";

import { CountdownContainer, MenuItem, Overlay, Container, Strong, Button } from "./styles";
import { FiPauseCircle, FiStopCircle, FiPlayCircle } from "react-icons/fi";

export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, pauseCountdown } = useContext(CountdownContext);

    const [playModal, setPlayModal] = useState(true);

    function closePlayModal() {
        setPlayModal(false);
        resetCountdown();
    }

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    return (
        <div>
            {playModal && (
                <Overlay>
                    <Container>
                        <Strong>Clique para iniciar</Strong>
                        <Button onClick={closePlayModal}>
                            <FiPlayCircle size={50} color="#2e384d" />
                        </Button>
                    </Container>
                </Overlay>
            )}
            <CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </CountdownContainer>
            {isActive ? (
                <MenuItem onClick={pauseCountdown} color="#F1FF53">
                    Pausar <FiPauseCircle />
                </MenuItem>
            ) : (
                <MenuItem onClick={startCountdown} color="#38D438">
                    Continuar <FiPlayCircle />
                </MenuItem>
            )}
            <MenuItem onClick={resetCountdown} color="#FF5757">
                Reiniciar <FiStopCircle />
            </MenuItem>
        </div>
    );
}
