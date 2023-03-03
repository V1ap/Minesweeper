import ICell from "../interfaces/ICell";

export const summerClearClickedCell = (mineField: ICell[][]) => {
  let sum = 0;
  mineField.forEach((row) => {
    row.forEach((el) => {
      if (el.clicked) sum++;
    });
  });
  return sum;
};
