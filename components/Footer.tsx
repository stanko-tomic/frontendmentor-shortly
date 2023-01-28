import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flexFooter}>
          <div className={styles.logoContainer}>
            <img src="/images/logo.svg" alt="Image of shortly logo" />
          </div>
          <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
              <div className={styles.footerCategory}>
                <h5 id="Features" className={styles.categoryHeading}>
                  Features
                </h5>
                <div aria-labelledby="Features" className={styles.links}>
                  <a href="#">Link Shortening</a>
                  <a href="#">Branded Links</a>
                  <a href="#">Analytics</a>
                </div>
              </div>
              <div className={styles.footerCategory}>
                <h5 id="Resources" className={styles.categoryHeading}>
                  Resources
                </h5>
                <div aria-labelledby="Resources" className={styles.links}>
                  <a href="#">Blog</a>
                  <a href="#">Developers</a>
                  <a href="#">Support</a>
                </div>
              </div>
              <div className={styles.footerCategory}>
                <h5 id="Company" className={styles.categoryHeading}>
                  Company
                </h5>
                <div aria-labelledby="Company" className={styles.links}>
                  <a href="#">About</a>
                  <a href="#">Our Team</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
            <div className={styles.footerIcons}>
              <a href="#" aria-label="Link to Facebook">
                <img src="/images/icon-facebook.svg" alt="Icon of Facebook" />
              </a>
              <a href="#" aria-label="Link to Twitter">
                <img src="/images/icon-twitter.svg" alt="Icon of Twitter" />
              </a>
              <a href="#" aria-label="Link to Pinterest">
                <img src="/images/icon-pinterest.svg" alt="Icon of Pinterest" />
              </a>
              <a href="#" aria-label="Link to Instagram">
                <img src="/images/icon-instagram.svg" alt="Icon of Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
