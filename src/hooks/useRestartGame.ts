import { useEffect, useState } from "react";
import ICell from "../interfaces/ICell";
import ICellCord from "../interfaces/ICellCord";
import { createField } from "../utils/createField";
import { useAppSelector } from "./redux";

export const useRestartGame = (): [
  ICell[][],
  React.Dispatch<React.SetStateAction<ICell[][]>>,
  ICellCord,
  React.Dispatch<React.SetStateAction<ICellCord>>
] => {
  const isRestart = useAppSelector(
    (state) => state.mineReducer.gameStatus.isRestart
  );
  const [mineField, setMineField] = useState<ICell[][]>(createField());
  const [startMine, setStartMine] = useState<ICellCord>({ x: -1, y: -1 });

  useEffect(() => {
    if (isRestart) {
      setMineField(createField());
      setStartMine({ x: -1, y: -1 });
    }
  }, [isRestart]);

  return [mineField, setMineField, startMine, setStartMine];
};
