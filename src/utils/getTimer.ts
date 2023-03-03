export const getTimer = (time: number): string[] => {
  if (time > 998) {
    return ["nine", "nine", "nine"];
  }
  if (time / 100 < 1) {
    if (time / 10 < 1) {
      if (time < 1) {
        return ["zero", "zero", "zero"];
      }
      let result = ["zero", "zero"];
      result.push(getStringNumber(time));
      return result;
    }
    let result = ["zero"];
    result.push(getStringNumber(Math.floor(time / 10)));
    result.push(getStringNumber(time % 10));
    return result;
  }
  let result = [];
  result.push(getStringNumber(Math.floor(time / 100)));
  result.push(getStringNumber(Math.floor((time % 100) / 10)));
  result.push(getStringNumber(time % 10));
  return result;
};

export const getStringNumber = (number: number) => {
  return number == 1
    ? "one"
    : number == 2
    ? "two"
    : number == 3
    ? "three"
    : number == 4
    ? "four"
    : number == 5
    ? "five"
    : number == 6
    ? "six"
    : number == 7
    ? "seven"
    : number == 8
    ? "eight"
    : number == 9
    ? "nine"
    : "zero";
};
