import ICell from "../interfaces/ICell";
import ICellCord from "../interfaces/ICellCord";

let newMineField: ICell[][];
export const clickZeroCell = (cellCord: ICellCord, mineField: ICell[][]) => {
  newMineField = mineField;

  if (cellCord.x && cellCord.y) {
    if (
      !newMineField[cellCord.x - 1][cellCord.y - 1].number &&
      !newMineField[cellCord.x - 1][cellCord.y - 1].clicked &&
      !newMineField[cellCord.x - 1][cellCord.y - 1].flag
    ) {
      newMineField[cellCord.x - 1][cellCord.y - 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x - 1, y: cellCord.y - 1 });
    } else if (!newMineField[cellCord.x - 1][cellCord.y - 1].flag)
      newMineField[cellCord.x - 1][cellCord.y - 1].clicked = true;
  }

  if (cellCord.x < 15 && cellCord.y < 15) {
    if (
      !newMineField[cellCord.x + 1][cellCord.y + 1].number &&
      !newMineField[cellCord.x + 1][cellCord.y + 1].clicked &&
      !newMineField[cellCord.x + 1][cellCord.y + 1].flag
    ) {
      newMineField[cellCord.x + 1][cellCord.y + 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x + 1, y: cellCord.y + 1 });
    } else if (!newMineField[cellCord.x + 1][cellCord.y + 1].flag)
      newMineField[cellCord.x + 1][cellCord.y + 1].clicked = true;
  }

  if (cellCord.x < 15) {
    if (
      !newMineField[cellCord.x + 1][cellCord.y].number &&
      !newMineField[cellCord.x + 1][cellCord.y].clicked &&
      !newMineField[cellCord.x + 1][cellCord.y].flag
    ) {
      newMineField[cellCord.x + 1][cellCord.y].clicked = true;
      closeCellNumberChecker({ x: cellCord.x + 1, y: cellCord.y });
    } else if (!newMineField[cellCord.x + 1][cellCord.y].flag)
      newMineField[cellCord.x + 1][cellCord.y].clicked = true;
  }

  if (cellCord.x) {
    if (
      !newMineField[cellCord.x - 1][cellCord.y].number &&
      !newMineField[cellCord.x - 1][cellCord.y].clicked &&
      !newMineField[cellCord.x - 1][cellCord.y].flag
    ) {
      newMineField[cellCord.x - 1][cellCord.y].clicked = true;
      closeCellNumberChecker({ x: cellCord.x - 1, y: cellCord.y });
    } else if (!newMineField[cellCord.x - 1][cellCord.y].flag)
      newMineField[cellCord.x - 1][cellCord.y].clicked = true;
  }

  if (cellCord.y < 15) {
    if (
      !newMineField[cellCord.x][cellCord.y + 1].number &&
      !newMineField[cellCord.x][cellCord.y + 1].clicked &&
      !newMineField[cellCord.x][cellCord.y + 1].flag
    ) {
      newMineField[cellCord.x][cellCord.y + 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x, y: cellCord.y + 1 });
    } else if (!newMineField[cellCord.x][cellCord.y + 1].flag)
      newMineField[cellCord.x][cellCord.y + 1].clicked = true;
  }

  if (cellCord.y) {
    if (
      !newMineField[cellCord.x][cellCord.y - 1].number &&
      !newMineField[cellCord.x][cellCord.y - 1].clicked &&
      !newMineField[cellCord.x][cellCord.y - 1].flag
    ) {
      newMineField[cellCord.x][cellCord.y - 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x, y: cellCord.y - 1 });
    } else if (!newMineField[cellCord.x][cellCord.y - 1].flag)
      newMineField[cellCord.x][cellCord.y - 1].clicked = true;
  }
  if (cellCord.x && cellCord.y < 15) {
    if (
      !newMineField[cellCord.x - 1][cellCord.y + 1].number &&
      !newMineField[cellCord.x - 1][cellCord.y + 1].clicked &&
      !newMineField[cellCord.x - 1][cellCord.y + 1].flag
    ) {
      newMineField[cellCord.x - 1][cellCord.y + 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x - 1, y: cellCord.y + 1 });
    } else if (!newMineField[cellCord.x - 1][cellCord.y + 1].flag)
      newMineField[cellCord.x - 1][cellCord.y + 1].clicked = true;
  }

  if (cellCord.y && cellCord.x < 15) {
    if (
      !newMineField[cellCord.x + 1][cellCord.y - 1].number &&
      !newMineField[cellCord.x + 1][cellCord.y - 1].clicked &&
      !newMineField[cellCord.x + 1][cellCord.y - 1].flag
    ) {
      newMineField[cellCord.x + 1][cellCord.y - 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x + 1, y: cellCord.y - 1 });
    } else if (!newMineField[cellCord.x + 1][cellCord.y - 1].flag)
      newMineField[cellCord.x + 1][cellCord.y - 1].clicked = true;
  }
  return newMineField;
};

const closeCellNumberChecker = (cellCord: ICellCord) => {
  if (cellCord.x && cellCord.y) {
    if (
      !newMineField[cellCord.x - 1][cellCord.y - 1].number &&
      !newMineField[cellCord.x - 1][cellCord.y - 1].clicked &&
      !newMineField[cellCord.x - 1][cellCord.y - 1].flag
    ) {
      newMineField[cellCord.x - 1][cellCord.y - 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x - 1, y: cellCord.y - 1 });
    } else if (!newMineField[cellCord.x - 1][cellCord.y - 1].flag)
      newMineField[cellCord.x - 1][cellCord.y - 1].clicked = true;
  }

  if (cellCord.x < 15 && cellCord.y < 15) {
    if (
      !newMineField[cellCord.x + 1][cellCord.y + 1].number &&
      !newMineField[cellCord.x + 1][cellCord.y + 1].clicked &&
      !newMineField[cellCord.x + 1][cellCord.y + 1].flag
    ) {
      newMineField[cellCord.x + 1][cellCord.y + 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x + 1, y: cellCord.y + 1 });
    } else if (!newMineField[cellCord.x + 1][cellCord.y + 1].flag)
      newMineField[cellCord.x + 1][cellCord.y + 1].clicked = true;
  }

  if (cellCord.x < 15) {
    if (
      !newMineField[cellCord.x + 1][cellCord.y].number &&
      !newMineField[cellCord.x + 1][cellCord.y].clicked &&
      !newMineField[cellCord.x + 1][cellCord.y].flag
    ) {
      newMineField[cellCord.x + 1][cellCord.y].clicked = true;
      closeCellNumberChecker({ x: cellCord.x + 1, y: cellCord.y });
    } else if (!newMineField[cellCord.x + 1][cellCord.y].flag)
      newMineField[cellCord.x + 1][cellCord.y].clicked = true;
  }

  if (cellCord.x) {
    if (
      !newMineField[cellCord.x - 1][cellCord.y].number &&
      !newMineField[cellCord.x - 1][cellCord.y].clicked &&
      !newMineField[cellCord.x - 1][cellCord.y].flag
    ) {
      newMineField[cellCord.x - 1][cellCord.y].clicked = true;
      closeCellNumberChecker({ x: cellCord.x - 1, y: cellCord.y });
    } else if (!newMineField[cellCord.x - 1][cellCord.y].flag)
      newMineField[cellCord.x - 1][cellCord.y].clicked = true;
  }

  if (cellCord.y < 15) {
    if (
      !newMineField[cellCord.x][cellCord.y + 1].number &&
      !newMineField[cellCord.x][cellCord.y + 1].clicked &&
      !newMineField[cellCord.x][cellCord.y + 1].flag
    ) {
      newMineField[cellCord.x][cellCord.y + 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x, y: cellCord.y + 1 });
    } else if (!newMineField[cellCord.x][cellCord.y + 1].flag)
      newMineField[cellCord.x][cellCord.y + 1].clicked = true;
  }

  if (cellCord.y) {
    if (
      !newMineField[cellCord.x][cellCord.y - 1].number &&
      !newMineField[cellCord.x][cellCord.y - 1].clicked &&
      !newMineField[cellCord.x][cellCord.y - 1].flag
    ) {
      newMineField[cellCord.x][cellCord.y - 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x, y: cellCord.y - 1 });
    } else if (!newMineField[cellCord.x][cellCord.y - 1].flag)
      newMineField[cellCord.x][cellCord.y - 1].clicked = true;
  }
  if (cellCord.x && cellCord.y < 15) {
    if (
      !newMineField[cellCord.x - 1][cellCord.y + 1].number &&
      !newMineField[cellCord.x - 1][cellCord.y + 1].clicked &&
      !newMineField[cellCord.x - 1][cellCord.y + 1].flag
    ) {
      newMineField[cellCord.x - 1][cellCord.y + 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x - 1, y: cellCord.y + 1 });
    } else if (!newMineField[cellCord.x - 1][cellCord.y + 1].flag)
      newMineField[cellCord.x - 1][cellCord.y + 1].clicked = true;
  }

  if (cellCord.y && cellCord.x < 15) {
    if (
      !newMineField[cellCord.x + 1][cellCord.y - 1].number &&
      !newMineField[cellCord.x + 1][cellCord.y - 1].clicked &&
      !newMineField[cellCord.x + 1][cellCord.y - 1].flag
    ) {
      newMineField[cellCord.x + 1][cellCord.y - 1].clicked = true;
      closeCellNumberChecker({ x: cellCord.x + 1, y: cellCord.y - 1 });
    } else if (!newMineField[cellCord.x + 1][cellCord.y - 1].flag)
      newMineField[cellCord.x + 1][cellCord.y - 1].clicked = true;
  }
};
