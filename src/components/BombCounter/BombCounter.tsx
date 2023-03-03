import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { getTimer } from "../../utils/getTimer";
import styles from "./bombcounter.module.css";

export function BombCounter() {
  const bombCount = useAppSelector((state) => state.mineReducer.bombsCount);
  const [first, second, third] = getTimer(bombCount);

  return (
    <div className={styles.bombCounter}>
      <span className={`${styles[first]} ${styles.number}`}></span>
      <span className={`${styles[second]} ${styles.number}`}></span>
      <span className={`${styles[third]} ${styles.number}`}></span>
    </div>
  );
}
