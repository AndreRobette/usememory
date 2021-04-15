import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts/index";

import { CountdownContainer, MenuItem, Overlay, Container, Strong, Button, Modal, Text, ButtonReset, ModalGamePage } from "./styles";
import { FiPauseCircle, FiStopCircle, FiPlayCircle } from "react-icons/fi";

export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown, pauseCountdown } = useContext(CountdownContext);

    const [playModal, setPlayModal] = useState(true);
    const [resetModal, setResetModal] = useState(false);
    const [pauseModal, setPauseModal] = useState(false);

    function closePlayModal() {
        setPlayModal(false);
        resetCountdown();
    }

    function reload(){
        location.reload();
    }

    function block(){
        setPauseModal(true);
        pauseCountdown();
    }
    function release(){
        setPauseModal(false);
        startCountdown();
    }

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

    useEffect(() => {
        setResetModal(false)
        Notification.requestPermission();
    }, []);

    return (
        <div>
            {hasFinished? (
                new Audio("/audios/hasFinished.ogg").play(),
                    <Modal>
                        <Text>Infelizmente o tempo acabou!</Text>
                        <ButtonReset onClick={reload}>
                           Reiniciar
                        </ButtonReset>
                    </Modal>
                ): 
            playModal && (
                <Overlay>
                    <Container>
                        <Strong>Clique para iniciar</Strong>
                        <Button onClick={closePlayModal}>
                            <FiPlayCircle size={50} color="#2e384d" />
                        </Button>
                    </Container>
                </Overlay>
            )}
            {pauseModal && (
                <ModalGamePage/>
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
                <MenuItem onClick={block} color="#F1FF53">
                    Pausar <FiPauseCircle />
                </MenuItem>
            ) : (
                <MenuItem onClick={release} color="#38D438">
                    Continuar <FiPlayCircle />
                </MenuItem>
            )}
            <MenuItem onClick={{resetCountdown} && reload} color="#FF5757">
                Reiniciar <FiStopCircle />
            </MenuItem>
        </div>
    );
}
