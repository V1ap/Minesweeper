import React from "react";
import { useAppSelector } from "../../hooks/redux";
import styles from "./result.module.css";

export function Result() {
  const { gameStatus, isWin } = useAppSelector((state) => state.mineReducer);
  return (
    <div className={styles.result}>
      {gameStatus.isEnd && (
        <span>
          {isWin ? "Congratulations!!! One more time ?" : "Try again"}
        </span>
      )}
    </div>
  );
}
