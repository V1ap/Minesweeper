import { useEffect } from "react";
import ICell from "../interfaces/ICell";
import ICellCord from "../interfaces/ICellCord";
import { mineSlice } from "../store/reducers/MineSlice";
import { clickZeroCell } from "../utils/clickZeroCell";
import { generatePlayField } from "../utils/generatePlayField";
import { updateMine } from "../utils/updateMine";
import { useAppDispatch } from "./redux";

export const useStartGame = (
  startMine: ICellCord,
  mineField: ICell[][],
  setClearClickedCellNeed: React.Dispatch<React.SetStateAction<number>>,
  setMineField: React.Dispatch<React.SetStateAction<ICell[][]>>
) => {
  const dispatch = useAppDispatch();
  const { startGame, updateBombsCount } = mineSlice.actions;
  useEffect(() => {
    if (startMine.x !== -1) {
      dispatch(startGame());
      const { newMineField, bombCount } = generatePlayField(
        startMine,
        updateMine(startMine, mineField, {
          x: startMine.x,
          y: startMine.y,
          bomb: false,
          number: 0,
          clicked: false,
          flag: false,
          questionMark: false,
        })
      );
      dispatch(updateBombsCount(bombCount));
      setClearClickedCellNeed(256 - bombCount);
      if (newMineField[startMine.x][startMine.y].number) {
        setMineField(
          updateMine(startMine, newMineField, {
            x: startMine.x,
            y: startMine.y,
            bomb: newMineField[startMine.x][startMine.y].bomb,
            number: newMineField[startMine.x][startMine.y].number,
            clicked: true,
            flag: newMineField[startMine.x][startMine.y].flag,
            questionMark: newMineField[startMine.x][startMine.y].questionMark,
          })
        );
      } else
        setMineField(
          clickZeroCell(
            startMine,
            updateMine(startMine, newMineField, {
              x: startMine.x,
              y: startMine.y,
              bomb: newMineField[startMine.x][startMine.y].bomb,
              number: newMineField[startMine.x][startMine.y].number,
              clicked: true,
              flag: newMineField[startMine.x][startMine.y].flag,
              questionMark: newMineField[startMine.x][startMine.y].questionMark,
            })
          )
        );
    }
  }, [startMine]);
};
