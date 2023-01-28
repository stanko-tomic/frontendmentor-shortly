import React from "react";
import styles from "@/styles/Statistics.module.css";
import UrlShortener from "./UrlShortener";

const Statistics = () => {
  return (
    <main className={styles.statistics}>
      <div className={styles.container}>
        <div className={styles.urlShortener}>
          <UrlShortener />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2 className={styles.mainHeading}>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <div className={styles.circleIcon}>
                <img
                  src="/images/icon-brand-recognition.svg"
                  alt="Icon brand recognition"
                />
              </div>
              <h3 className={styles.gridHeading}>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            <div className={styles.gridItem}>
              <div className={styles.circleIcon}>
                <img
                  src="/images/icon-detailed-records.svg"
                  alt="Icon detailed records"
                />
              </div>
              <h3 className={styles.gridHeading}>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.circleIcon}>
                <img
                  src="/images/icon-fully-customizable.svg"
                  alt="Icon fully customizable"
                />
              </div>
              <h3 className={styles.gridHeading}>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
