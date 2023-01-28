import React from "react";

import styles from "@/styles/LandingScreen.module.css";

export const LandingScreen = () => {
  return (
    <main className={styles.landingScreen}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>More than just shorter links</h1>
          <p className={styles.subheading}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#" role="button" className={styles.ctaBtn}>
            Get Started
          </a>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="/images/illustration-working.svg"
            alt="Image of man working on a computer"
          />
        </div>
      </div>
    </main>
  );
};
