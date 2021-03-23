import Link from "next/link";
import React from "react";

import { Container, Icon, Score } from "./styles";

function MainHeader() {
    return (
        <Container>
            <Link href="/LandingPage">
                <Icon src="/images/HeaderIcon.svg" alt="usememory" />
            </Link>
            <Score>Pontuação: 100</Score>
        </Container>
    );
}

export default MainHeader;
