import ICell from "../interfaces/ICell";
import ICellCord from "../interfaces/ICellCord";

export const generatePlayField = (
  startCord: ICellCord,
  mineField: ICell[][]
) => {
  let bombCount = 0;
  let bomb;
  let newMineField = mineField;
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      if (i === startCord.x && j === startCord.y) continue;
      if (Math.random() * 100 <= (i === 15 ? 90 : 17) && bombCount < 40) {
        bomb = true;
        bombCount++;
      } else bomb = false;
      newMineField[i][j] = {
        x: i,
        y: j,
        bomb: bomb,
        number: bomb ? 9 : 0,
        clicked: false,
        flag: false,
        questionMark: false,
      };
    }
  }
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      if (!newMineField[i][j].bomb) {
        newMineField[i][j].number = closeCellMineChecker(
          { x: i, y: j },
          newMineField
        );
      }
    }
  }
  return { newMineField, bombCount };
};

const closeCellMineChecker = (
  cellCord: ICellCord,
  mineField: ICell[][]
): number => {
  let bombCount = 0;
  if (cellCord.x && cellCord.y) {
    if (mineField[cellCord.x - 1][cellCord.y - 1].bomb === true) bombCount++;
  }
  if (cellCord.x < 15 && cellCord.y < 15) {
    if (mineField[cellCord.x + 1][cellCord.y + 1].bomb === true) bombCount++;
  }
  if (cellCord.x < 15) {
    if (mineField[cellCord.x + 1][cellCord.y].bomb === true) bombCount++;
  }
  if (cellCord.x) {
    if (mineField[cellCord.x - 1][cellCord.y].bomb === true) bombCount++;
  }
  if (cellCord.y < 15) {
    if (mineField[cellCord.x][cellCord.y + 1].bomb === true) bombCount++;
  }
  if (cellCord.y) {
    if (mineField[cellCord.x][cellCord.y - 1].bomb === true) bombCount++;
  }
  if (cellCord.x && cellCord.y < 15) {
    if (mineField[cellCord.x - 1][cellCord.y + 1].bomb === true) bombCount++;
  }
  if (cellCord.y && cellCord.x < 15) {
    if (mineField[cellCord.x + 1][cellCord.y - 1].bomb === true) bombCount++;
  }
  return bombCount;
};
