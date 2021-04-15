import React from "react";
import Link from "next/link";

import { Container, Header, Icon } from "./styles";
import Head from "next/head";

function TutorialPage({ children }) {
  return (
    <Container>
       <Head>
        <title>useMEMOry</title>
      </Head>
      <Header>
        <Link href="/LandingPage">
          <Icon src="/images/headerIcon.svg" alt="usememory" />
        </Link>
        <Link href="/LandingPage">Retornar</Link>
      </Header>
        <div className="plyr__video-embed" id="player">
          <iframe
            src={`https://www.youtube.com/embed/3VpX7aQVx00?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
            allowFullScreen={true}
            allow="autoplay;fullscreen"
            className="plyr__video-embed"
          ></iframe>
        </div>
    </Container>
  );
}

export default TutorialPage;
