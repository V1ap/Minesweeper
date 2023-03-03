import { useEffect, useState } from "react";
import { getTimer } from "../utils/getTimer";
import { useAppSelector } from "./redux";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  let interval: number;
  const [stateInterval, setStateInterval] = useState(0);

  const gameStatus = useAppSelector((state) => state.mineReducer.gameStatus);

  useEffect(() => {
    if (gameStatus.isStart) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setStateInterval(interval);
    }
    if (gameStatus.isEnd) clearInterval(stateInterval);
    if (gameStatus.isRestart) {
      clearInterval(stateInterval);
      setTimer(0);
    }
  }, [gameStatus]);

  return getTimer(timer);
};
