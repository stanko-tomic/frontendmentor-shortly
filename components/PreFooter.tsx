import React from "react";
import styles from "@/styles/PreFooter.module.css";

const PreFooter = () => {
  return (
    <main className={styles.preFooter}>
      <div className={styles.container}>
        <h4 className={styles.heading}>Boost your links today</h4>
        <button type="submit">Get Started</button>
      </div>
    </main>
  );
};

export default PreFooter;
