/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.css";
import{ ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export function Cards({ img, name, story }) {
  return (
    <div className={styles["container"]}>
      <img src={img} alt="client image" />

      <div className={styles["stats"]}>
        <div className={styles["client-name"]}>{name}</div>
        <div className={styles["client-story"]}>
          <span><ImQuotesLeft /></span>
          <div>{story}</div>
          <span className={styles["span-2"]}><ImQuotesRight /></span>
        </div>
        <div className={styles["stars-icon"]}>
          <img src="/Star 1.png" alt="star" />
          <img src="/Star 1.png" alt="star" />
          <img src="/Star 1.png" alt="star" />
          <img src="/Star 1.png" alt="star" />
          <img src="/Star 1.png" alt="star" />
        </div>
      </div>
    </div>
  );
}
