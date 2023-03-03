import React, { useEffect, useState } from "react";
import ICell from "../../../interfaces/ICell";
import { getStringNumber } from "../../../utils/getTimer";
import styles from "./cell.module.css";
import ICellCord from "../../../interfaces/ICellCord";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { mineSlice } from "../../../store/reducers/MineSlice";
import { useMouseUpChecker } from "../../../hooks/useMouseUpChecker";

interface ICellProps {
  x: number;
  y: number;
  bomb: boolean;
  number: number;
  clicked: boolean;
  flag: boolean;
  questionMark: boolean;
  mineField: ICell[][];
  setterStart: ({ x, y }: ICellCord) => void;
  setterCell: ({ x, y }: ICellCord, mineField: ICell[][], Cell: ICell) => void;
}

export function Cell({
  x,
  y,
  bomb,
  number,
  clicked,
  flag,
  questionMark,
  mineField,
  setterStart,
  setterCell,
}: ICellProps) {
  const { gameStatus, isWin, bombsCount, cellIsMouseDown } = useAppSelector(
    (state) => state.mineReducer
  );
  const [isMouseDown, setIsMouseDown] = useState(false);
  useMouseUpChecker(cellIsMouseDown, setIsMouseDown);
  const dispatch = useAppDispatch();
  const { updateBombsCount, endGame, updateCellIsMouseDown } =
    mineSlice.actions;
  const boom = gameStatus.isEnd && !isWin;

  const handleClick = () => {
    if (!gameStatus.isStart && !gameStatus.isEnd) setterStart({ x, y });
    else {
      if (!flag && !questionMark && !boom) {
        setterCell({ x, y }, mineField, {
          x: x,
          y: y,
          bomb: bomb,
          number: number,
          clicked: true,
          flag: flag,
          questionMark: questionMark,
        });
        if (bomb) {
          dispatch(endGame(false));
        }
      }
    }
  };

  const handleContexMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (gameStatus.isStart) {
      if (!clicked && !boom && bombsCount) {
        if (!flag && !questionMark) dispatch(updateBombsCount(bombsCount - 1));
        if (flag) dispatch(updateBombsCount(bombsCount + 1));
        setterCell({ x, y }, mineField, {
          x: x,
          y: y,
          bomb: bomb,
          number: number,
          clicked: false,
          flag: !flag && !questionMark ? true : false,
          questionMark: flag ? true : false,
        });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!boom && !clicked && !flag && !questionMark) {
      if (!e.button) {
        setIsMouseDown(true);
        dispatch(updateCellIsMouseDown(true));
      }
    }
  };

  return (
    <button
      className={styles.btn}
      onClick={handleClick}
      onContextMenu={(e) => handleContexMenuClick(e)}
      onMouseDown={handleMouseDown}
    >
      <span
        className={`${styles.mine} ${
          clicked
            ? bomb
              ? styles.clickedBomb
              : styles[getStringNumber(number)]
            : ""
        } ${flag ? styles.flag : questionMark ? styles.questionMark : ""} 
      ${
        boom && bomb && !clicked
          ? styles.bomb
          : boom && flag && !bomb
          ? styles.missFlag
          : ""
      } ${isMouseDown ? styles.zero : ""}`}
      ></span>
    </button>
  );
}
