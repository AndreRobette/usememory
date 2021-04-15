import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { CountdownProvider } from "../../contexts/index";
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

const cardBack = "/images/cardBack.svg";
import { Container, Card, Modal, Title, Text, Button, FooterItem } from "./styles";
import { LevelingContext } from "../../contexts/LevelingContext";
import { CountdownContext } from "../../contexts/index";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import { Icon } from "../MainHeader/styles";
import { BiHomeAlt } from "react-icons/bi";

const GamePage: React.FC = () => {
    const { getIsMatch, level, render, setPoints, points } = useContext(LevelingContext);
    const [levelUpModal, setLevelUpModal] = useState(false);
    const [completedModal, setCompletedModal] = useState(false);
    const { resetCountdown, startCountdown } = useContext(CountdownContext);

    useEffect(() => {
        const cards = document.querySelectorAll(".memory-card");
        var counter = 0;
        var hasFlippedCard = false;
        var lockBoard = false;
        var firstCard, secondCard;

        function flipCard() {
            if (lockBoard) return;
            if (this === firstCard) return;

            this.classList.toggle("flip");

            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;

                return;
            }

            //else
            secondCard = this;
            checkForMatch();
        }

        function checkForMatch() {
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
            let animal = firstCard.dataset.framework;
            isMatch ? disableCards() : unflipCards();

            if (isMatch) {
                if (animal === "cat") {
                    new Audio("/audios/Cat.mp3").play();
                } else if (animal === "pig") {
                    new Audio("/audios/Pig.mp3").play();
                } else if (animal === "gorilla") {
                    new Audio("/audios/Monkey.mp3").play();
                } else if (animal === "sheep") {
                    new Audio("/audios/Sheep.mp3").play();
                } else if (animal === "rooster") {
                    new Audio("/audios/Rooster.mp3").play();
                } else if (animal === "cow") {
                    new Audio("/audios/Cow.mp3").play();
                } else if (animal === "duck") {
                    new Audio("/audios/Duck.mp3").play();
                } else if (animal === "bird") {
                    new Audio("/audios/Bird.mp3").play();
                } else if (animal === "snake") {
                    new Audio("/audios/Snake.mp3").play();
                } else if (animal === "elephant") {
                    new Audio("/audios/Elephant.mp3").play();
                }
            }
        }

        function disableCards() {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);

            counter += 2;
            checkIfAllHasMatched();
            resetBoard();
        }

        function unflipCards() {
            lockBoard = true;

            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");

                resetBoard();
            }, 1000);
        }

        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

        (function shuffle() {
            cards.forEach((card) => {
                let randomPos = Math.floor(Math.random() * render);
                card.style.order = randomPos;
            });
        })();

        function checkIfAllHasMatched() {
            if (cards.length === counter) {
                const flippedCards = document.querySelectorAll(".flip");

                //Todos os cards deram match (usuário ganhou o nível)
                if (flippedCards.length === cards.length) {
                    getIsMatch(true);
                    if (level === 1) {
                        setPoints(100);
                    } else if (level === 2) {
                        setPoints(200);
                    } else if (level === 3) {
                        setPoints(400);
                    } else if (level === 4) {
                        setPoints(800);
                    } else if (level === 5) {
                        setPoints(1000);
                    }
                    //console.log("passou de nivel:", level);
                }
            }
        }

        cards.forEach((card) => card.addEventListener("click", flipCard));
    }, [level]);

    useEffect(() => {
        let getCardsToUnflip = document.getElementsByClassName("memory-card flip");
        console.log("cima", getCardsToUnflip.length);

        for (var i = 0; i < getCardsToUnflip.length; i++) {
            console.log(getCardsToUnflip.length);
            let element = getCardsToUnflip[i];
            element.classList.remove("flip");
            console.log(getCardsToUnflip);
        }

        if (getCardsToUnflip.length === 8) {
            let cardsToUnflip = document.getElementsByClassName("memory-card flip");
            for (var i = 0; i < cardsToUnflip.length; i++) {
                let element = cardsToUnflip[i];
                element.classList.remove("flip");
            }
        }

        if (getCardsToUnflip.length === 7) {
            let cardsToUnflip = document.getElementsByClassName("memory-card flip");
            ("");
            for (var i = 0; i < cardsToUnflip.length; i++) {
                let element = cardsToUnflip[i];
                element.classList.remove("flip");
            }
        }

        if (getCardsToUnflip.length === 6) {
            let cardsToUnflip = document.getElementsByClassName("memory-card flip");
            for (var i = 0; i < cardsToUnflip.length; i++) {
                let element = cardsToUnflip[i];
                element.classList.remove("flip");
            }
        }

        if (getCardsToUnflip.length === 5) {
            let cardToUnflip = document.getElementsByClassName("memory-card flip");
            ("");
            cardToUnflip[0].classList.remove("flip");
        }

        if (getCardsToUnflip.length === 4) {
            let cardsToUnflip = document.getElementsByClassName("memory-card flip");
            for (var i = 0; i < cardsToUnflip.length; i++) {
                let element = cardsToUnflip[i];
                element.classList.remove("flip");
            }
        }

        if (getCardsToUnflip.length === 3) {
            let cardsToUnflip = document.getElementsByClassName("memory-card flip");
            ("");
            for (var i = 0; i < cardsToUnflip.length; i++) {
                let element = cardsToUnflip[i];
                element.classList.remove("flip");
            }
        }

        if (getCardsToUnflip.length === 2) {
            let cardsToUnflip = document.getElementsByClassName("memory-card flip");
            for (var i = 0; i < cardsToUnflip.length; i++) {
                let element = cardsToUnflip[i];
                element.classList.remove("flip");
            }
        }

        if (getCardsToUnflip.length === 1) {
            let cardToUnflip = document.getElementsByClassName("memory-card flip");
            ("");
            cardToUnflip[0].classList.remove("flip");
        }
    }, [level]);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        if (level === 2) {
            setLevelUpModal(true);
            new Audio("/audios/level2.ogg").play();
        }
        if (level === 3) {
            setLevelUpModal(true);
            new Audio("/audios/level3.ogg").play();
        }
        if (level === 4) {
            setLevelUpModal(true);
            new Audio("/audios/level4.ogg").play();
        }
        if (level === 5) {
            setLevelUpModal(true);
            new Audio("/audios/level5.ogg").play();
        }
        if (level === 6) {
            setCompletedModal(true);
            new Audio("/audios/completed.ogg").play();
        }
    }, [level]);

    function showCards() {
        if (level === 1) {
            return (
                <Container style={{ gridTemplateColumns: "200px 200px", gridTemplateRows: "200px 200px" }}>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="pig">
                        <Pig size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="pig">
                        <Pig size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                </Container>
            );
        } else if (level === 2) {
            return (
                <Container style={{ gridTemplateColumns: "200px 200px 200px", gridTemplateRows: "200px 200px" }}>
                    <Card id="card" className="memory-card" data-framework="bird">
                        <Bird size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="bird">
                        <Bird size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="sheep">
                        <Sheep size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="sheep">
                        <Sheep size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card id="card" className="memory-card" data-framework="rooster">
                        <Rooster size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="rooster">
                        <Rooster size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card> */}
                </Container>
            );
        } else if (level === 3) {
            return (
                <Container style={{ gridTemplateColumns: "200px 200px 200px 200px", gridTemplateRows: "200px 200px" }}>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="snake">
                        <Snake size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="snake">
                        <Snake size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="duck">
                        <Duck size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="duck">
                        <Duck size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="rooster">
                        <Rooster size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="rooster">
                        <Rooster size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card className="memory-card" data-framework="gorilla">
                        <Gorilla size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="gorilla">
                        <Gorilla size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card> */}
                </Container>
            );
        } else if (level === 4) {
            return (
                <Container style={{ gridTemplateColumns: "200px 200px 200px 200px 200px", gridTemplateRows: "200px 200px" }}>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="pig">
                        <Pig size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="pig">
                        <Pig size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="sheep">
                        <Sheep size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="sheep">
                        <Sheep size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="elephant">
                        <Elephant size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="elephant">
                        <Elephant size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card className="memory-card" data-framework="gorilla">
                        <Gorilla size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="gorilla">
                        <Gorilla size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card> */}
                    {/* <Card className="memory-card" data-framework="duck">
                        <Duck size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="duck">
                        <Duck size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card className="memory-card" data-framework="bird">
                        <Bird size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="bird">
                        <Bird size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card> */}
                </Container>
            );
        } else if (level === 5) {
            return (
                <Container style={{ gridTemplateColumns: "170px 170px 170px 170px", gridTemplateRows: "170px 170px 170px" }}>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="cat">
                        <Cat size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="snake">
                        <Snake size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="snake">
                        <Snake size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="sheep">
                        <Sheep size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="sheep">
                        <Sheep size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="elephant">
                        <Elephant size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card id="card" className="memory-card" data-framework="elephant">
                        <Elephant size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="cow">
                        <Cow size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="gorilla">
                        <Gorilla size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="gorilla">
                        <Gorilla size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card className="memory-card" data-framework="duck">
                        <Duck size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="duck">
                        <Duck size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="bird">
                        <Bird size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="bird">
                        <Bird size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card> */}
                    {/* <Card className="memory-card" data-framework="snake">
                        <Snake size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="snake">
                        <Snake size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    {/* <Card className="memory-card" data-framework="elephant">
                        <Elephant size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card>
                    <Card className="memory-card" data-framework="elephant">
                        <Elephant size={140} className="front-face" />
                        <img src={cardBack} alt="cardBack" className="back-face" />
                    </Card> */}
                </Container>
            );
        } else if (level === 6) {
            return (
                <>
                    {/* <div
                        style={{
                            display: "flex",
                            justifySelf: "center",
                            alignSelf: "center",
                            flexDirection: "column",
                            wordWrap: "break-word",
                            width: "50%",
                            height: "350px",
                            justifyContent: "space-evenly",
                            textAlign: "center",
                            border: "5px solid #1bb31b",
                            borderRadius: "20px",
                            padding: "30px",
                            cursor: "default",
                            backgroundColor: "white",
                        }}
                    >
                        <h1 style={{ color: "#38D438", fontSize: "50px" }}>Parabéns! </h1>
                        <h2 style={{ color: "#5c5c5c", marginTop: "25px", fontSize: "30px" }}>Você terminou o jogo com {points} pontos!</h2>
                    </div> */}
                </>
            );
        }
    }
    function buttonModal() {
        setLevelUpModal(false);
    }

    return (
        <CountdownProvider>
            {levelUpModal && (
                <Modal>
                    <img src="/images/icon.svg"></img>
                    <Title>Parabéns!</Title>
                    <Text>Você passou de nível!</Text>
                    <Button onClick={buttonModal}>
                        Jogar nível {level} <AiFillPlayCircle />
                    </Button>
                </Modal>
            )}
            {completedModal && (
                <Modal>
                    <img src="/images/icon.svg"></img>
                    <Title>Parabéns!</Title>
                    <Text>Você completou todos os desafios!</Text>
                    <FooterItem>
                        <Link href="LandingPage">
                            <BiHomeAlt size={50} />
                        </Link>
                    </FooterItem>
                </Modal>
            )}
            {showCards()}
        </CountdownProvider>
    );
};

export default GamePage;
