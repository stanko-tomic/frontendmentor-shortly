import styles from "@/styles/Home.module.css";
import { Poppins } from "@next/font/google";
import { NavBar } from "@/components/NavBar";
import { LandingScreen } from "@/components/LandingScreen";
import Statistics from "@/components/Statistics";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import Head from "next/head";
const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
        <meta
          property="og:title"
          content="Frontend Mentor | Shortly URL shortening API Challenge"
          key="title"
        />
        <link rel="shortcut icon" href="/images/favicon-32x32.png" />
      </Head>
      <main style={poppins.style} className={styles.homeContainer}>
        <NavBar />
        <LandingScreen />
        <Statistics />
        <PreFooter />
        <Footer />

        {/* <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://www.frontendmentor.io/profile/stanko-tomic">
            Stanko Tomic
          </a>
          .
        </div> */}
      </main>
    </>
  );
}
