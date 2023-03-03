import ICell from "../interfaces/ICell";
import ICellCord from "../interfaces/ICellCord";

export const updateMine = (
  cellCord: ICellCord,
  mineField: ICell[][],
  newCell: ICell
) => {
  let newMineField = mineField;
  newMineField[cellCord.x][cellCord.y] = newCell;
  return newMineField;
};
