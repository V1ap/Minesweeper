import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { mineSlice } from "../../store/reducers/MineSlice";
import styles from "./smile.module.css";

export function Smile() {
  const [isMouseUp, setIsMouseUp] = useState(false);
  const dispatch = useAppDispatch();
  const { restartGame } = mineSlice.actions;
  const smileStatus = {
    isWin: useAppSelector((state) => state.mineReducer.isWin),
    gameIsEnd: useAppSelector((state) => state.mineReducer.gameStatus.isEnd),
    cellIsMouseDown: useAppSelector(
      (state) => state.mineReducer.cellIsMouseDown
    ),
  };

  const handleMouseUp = () => {
    setIsMouseUp(false);
    dispatch(restartGame());
  };

  const handleMouseDown = () => {
    setIsMouseUp(true);
  };

  return (
    <button
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      className={`${styles.smile} ${isMouseUp ? styles.smileMouseDown : ""} ${
        smileStatus.cellIsMouseDown ? styles.scared : ""
      } ${
        smileStatus.gameIsEnd
          ? smileStatus.isWin
            ? styles.win
            : styles.lose
          : ""
      }`}
    ></button>
  );
}
