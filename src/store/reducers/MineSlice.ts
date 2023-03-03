import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MineState {
  bombsCount: number;
  cellIsMouseDown: boolean;
  isWin: boolean;
  gameStatus: {
    isEnd: boolean;
    isStart: boolean;
    isRestart: boolean;
  };
}

const initialState: MineState = {
  gameStatus: {
    isEnd: false,
    isStart: false,
    isRestart: false,
  },
  bombsCount: 40,
  cellIsMouseDown: false,
  isWin: false,
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    updateBombsCount(state, action: PayloadAction<number>) {
      state.bombsCount = action.payload;
    },
    startGame(state) {
      state.gameStatus.isStart = true;
      state.gameStatus.isEnd = false;
      state.gameStatus.isRestart = false;
    },
    endGame(state, action: PayloadAction<boolean>) {
      state.gameStatus.isStart = false;
      state.gameStatus.isEnd = true;
      state.gameStatus.isRestart = false;
      state.isWin = action.payload;
    },
    updateCellIsMouseDown(state, action: PayloadAction<boolean>) {
      state.cellIsMouseDown = action.payload;
    },
    restartGame(state) {
      state.gameStatus.isStart = false;
      state.gameStatus.isEnd = false;
      state.gameStatus.isRestart = true;
      state.bombsCount = 40;
    },
  },
});

export default mineSlice.reducer;
