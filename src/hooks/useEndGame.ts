import { useEffect, useState } from "react";
import ICell from "../interfaces/ICell";
import { mineSlice } from "../store/reducers/MineSlice";
import { summerClearClickedCell } from "../utils/summerClearClickedCell";
import { useAppDispatch, useAppSelector } from "./redux";

export const useEndGame = (
  mineField: ICell[][],
  update: boolean
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const isEnd = useAppSelector((state) => state.mineReducer.gameStatus.isEnd);
  const [clearClickedCellNeed, setClearClickedCellNeed] = useState(256);
  const dispatch = useAppDispatch();
  const { endGame } = mineSlice.actions;

  useEffect(() => {
    if (summerClearClickedCell(mineField) == clearClickedCellNeed) {
      if (!isEnd) dispatch(endGame(true));
    }
  }, [update]);

  return [clearClickedCellNeed, setClearClickedCellNeed];
};
