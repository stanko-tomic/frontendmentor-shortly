import React, { useEffect, useState } from "react";
import styles from "@/styles/UrlShortener.module.css";
import { Poppins } from "@next/font/google";
import { useStateContext } from "@/context/StateContext";
import axios from "axios";
import copy from "copy-to-clipboard";

const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

const UrlShortener = () => {
  const [error, setError] = useState(false);
  const { linksArray, setLinksArray } = useStateContext();
  const [inputValue, setInputValue] = useState("");
  const [lastClicked, setLastClicked] = useState("");

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const URL_REGEX =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "" || !URL_REGEX.test(e.target.value)) {
      setError(true);
      setInputValue(e.target.value);
    } else {
      setError(false);
      setInputValue(e.target.value);
    }
  };

  const handleClick = async () => {
    if (inputValue != "" && !error && URL_REGEX.test(inputValue)) {
      try {
        const res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        const data = res.data.result;
        const shortLink = data.short_link;
        const originalLink = data.original_link;
        setLinksArray([...linksArray, { shortLink, originalLink }]);
      } catch (error) {
        console.error(error);
      }
    }
    setInputValue("");
  };

  const handleCopyClick = (shortLink: string) => {
    setLastClicked(shortLink);
    copy(shortLink);
    setTimeout(() => {
      setLastClicked("");
    }, 6000);
  };

  return (
    <section className={styles.urlShortener}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.flex}>
            <div className={styles.flexOne}>
              <input
                style={poppins.style}
                type="url"
                name="url"
                pattern="https://.*"
                placeholder="Shorten a link here..."
                className={error ? styles.emptyInput : ""}
                onChange={handleChange}
                value={inputValue}
                aria-labelledby="shortenButton"
              />
              {error ? (
                <p className={styles.errorMessage}>Please add link</p>
              ) : (
                ""
              )}
            </div>
            <button
              className={styles.ctaBtn}
              id="shortenButton"
              type="submit"
              onClick={handleClick}
            >
              Shorten It!
            </button>
          </div>
        </div>
        {domLoaded && (
          <div className={styles.links}>
            {linksArray.map((item) => (
              <div
                className={`${styles.linkItem} ${styles.flexLinks}`}
                key={item.shortLink}
              >
                <p className={styles.url}>{item.originalLink}</p>
                <div className={styles.seperator}></div>
                <div className={`${styles.ctaItems} ${styles.flexLinks}`}>
                  <p className={styles.shortenedUrl}>{item.shortLink}</p>
                  <button
                    type="submit"
                    className={`${styles.copyBtn} ${
                      lastClicked === item.shortLink ? styles.copied : ""
                    }`}
                    onClick={() => handleCopyClick(item.shortLink)}
                  >
                    {lastClicked === item.shortLink ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UrlShortener;
