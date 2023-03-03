import React, { useState } from "react";
import { useEndGame } from "../../hooks/useEndGame";
import { useRestartGame } from "../../hooks/useRestartGame";
import { useStartGame } from "../../hooks/useStartGame";
import ICell from "../../interfaces/ICell";
import ICellCord from "../../interfaces/ICellCord";
import { clickZeroCell } from "../../utils/clickZeroCell";
import { generateRandomString } from "../../utils/generateRandomIndex";
import { updateMine } from "../../utils/updateMine";
import { Cell } from "./Cell/Cell";
import styles from "./minefield.module.css";

export function MineField() {
  const [update, setUpdate] = useState(false);
  const [mineField, setMineField, startMine, setStartMine] = useRestartGame();
  const [clearClickedCellNeed, setClearClickedCellNeed] = useEndGame(
    mineField,
    update
  );
  useStartGame(startMine, mineField, setClearClickedCellNeed, setMineField);

  const setterStart = (mineCord: ICellCord) => {
    setStartMine(mineCord);
  };

  const setterMine = (
    mineCord: ICellCord,
    mineField: ICell[][],
    newMine: ICell
  ) => {
    setMineField(updateMine(mineCord, mineField, newMine));
  };

  const setterZeroNumber = (
    mineCord: ICellCord,
    mineField: ICell[][],
    newMine: ICell
  ) => {
    setMineField(updateMine(mineCord, mineField, newMine));
    if (newMine.clicked) {
      setMineField(clickZeroCell(mineCord, mineField));
    }
  };

  return (
    <div
      className={styles.mineField}
      onClick={() => setUpdate((prev) => !prev)}
      onContextMenu={(e) => {
        e.preventDefault();
        setUpdate((prev) => !prev);
      }}
    >
      {mineField.map((row) => {
        return row.map((el) => {
          return (
            <Cell
              x={el.x}
              y={el.y}
              bomb={el.bomb}
              number={el.number}
              clicked={el.clicked}
              flag={el.flag}
              questionMark={el.questionMark}
              key={generateRandomString()}
              setterStart={setterStart}
              setterCell={el.number ? setterMine : setterZeroNumber}
              mineField={mineField}
            />
          );
        });
      })}
    </div>
  );
}
