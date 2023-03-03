export default interface ICell {
  x: number;
  y: number;
  bomb: boolean;
  number: number;
  clicked: boolean;
  flag: boolean;
  questionMark: boolean;
}
