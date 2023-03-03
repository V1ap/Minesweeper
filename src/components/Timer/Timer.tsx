import React from "react";
import { useTimer } from "../../hooks/useTimer";
import styles from "./timer.module.css";

export function Timer() {
  const [first, second, third] = useTimer();

  return (
    <div className={styles.timer}>
      <span className={`${styles[first]} ${styles.number}`}></span>
      <span className={`${styles[second]} ${styles.number}`}></span>
      <span className={`${styles[third]} ${styles.number}`}></span>
    </div>
  );
}
