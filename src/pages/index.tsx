import Head from "next/head";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>useMEMOry</title>
      </Head>
      <LandingPage/>
    </div>
  );
}
