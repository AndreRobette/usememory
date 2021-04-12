import Link from "next/link";
import React, { useContext } from "react";
import { LevelingContext } from "../../contexts/LevelingContext";

import { Container, Icon, Score } from "./styles";

function MainHeader() {
    const { points } = useContext(LevelingContext);
    return (
        <Container>
            <Link href="/LandingPage">
                <Icon src="/images/headerIcon.svg" alt="usememory" />
            </Link>
            <Score>Pontuação: {points}</Score>
        </Container>
    );
}

export default MainHeader;
