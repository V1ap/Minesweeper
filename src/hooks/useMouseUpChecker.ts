import { useEffect } from "react";

export const useMouseUpChecker = (
  cellIsMouseDown: boolean,
  setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (!cellIsMouseDown) setIsMouseDown(false);
  }, [cellIsMouseDown]);
};
