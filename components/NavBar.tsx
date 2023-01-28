import React, { useState } from "react";
import Link from "next/link";

import styles from "@/styles/NavBar.module.css";
import { GrClose, GrMenu } from "react-icons/gr";

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationItems}>
          <img src="/images/logo.svg" alt="Image of shortly logo" />

          <div className={styles.mobileToggle}>
            {activeMenu ? (
              <button
                type="button"
                aria-expanded="true"
                aria-controls="mobileNavigation"
                aria-label="Close Navigation"
              >
                <GrClose onClick={handleClick} />
              </button>
            ) : (
              <button
                type="button"
                aria-expanded="false"
                aria-controls="mobileNavigation"
                aria-label="Open Navigation"
              >
                <GrMenu onClick={handleClick} />
              </button>
            )}
          </div>

          {activeMenu ? (
            <div className={styles.navLinks} id="mobileNavigation">
              <div className={styles.navGroup}>
                <Link href="/" aria-label="Link to Features">
                  Features
                </Link>
                <Link href="/" aria-label="Link to Pricing">
                  Pricing
                </Link>
                <Link href="/" aria-label="Link to Resources">
                  Resources
                </Link>
              </div>
              <div className={styles.seperator} aria-hidden="true"></div>
              <div className={styles.navGroup}>
                <Link href="/" aria-label="Link to Login">
                  Login
                </Link>
                <button
                  className={styles.ctaBtn}
                  aria-label="Button to Sign Up"
                >
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`${styles.navLinks} ${styles.mobileInActive}`}
              role="navigation"
            >
              <div className={styles.navGroup}>
                <Link href="/" aria-label="Link to Features">
                  Features
                </Link>
                <Link href="/" aria-label="Link to Pricing">
                  Pricing
                </Link>
                <Link href="/" aria-label="Link to Resources">
                  Resources
                </Link>
              </div>
              <div className={styles.navGroup}>
                <Link href="/" aria-label="Link to Login">
                  Login
                </Link>
                <button
                  className={styles.ctaBtn}
                  aria-label="Button to Sign Up"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
