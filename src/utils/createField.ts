import ICell from "../interfaces/ICell";

export const createField = () => {
  let field: ICell[][] = [];
  for (let i = 0; i < 16; i++) {
    let row: ICell[] = [];
    for (let j = 0; j < 16; j++) {
      row.push({
        x: i,
        y: j,
        bomb: false,
        number: 0,
        clicked: false,
        flag: false,
        questionMark: false,
      });
    }
    field.push(row);
  }
  return field;
};
