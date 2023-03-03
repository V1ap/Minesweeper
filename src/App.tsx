import "gardevoir";
import styles from "./App.module.css";
import { MineField } from "./components/MineField";
import { Timer } from "./components/Timer";
import { BombCounter } from "./components/BombCounter";
import { Smile } from "./components/Smile";
import { Result } from "./components/Result";
import { useAppDispatch } from "./hooks/redux";
import { mineSlice } from "./store/reducers/MineSlice";

function App() {
  const dispatch = useAppDispatch();
  const { updateCellIsMouseDown } = mineSlice.actions;

  function mouseup(e: MouseEvent) {
    if (!e.button) {
      dispatch(updateCellIsMouseDown(false));
    }
  }

  window.addEventListener("mouseup", mouseup);
  return (
    <div className={styles.body}>
      <div className={styles.game}>
        <div className={styles.gameTop}>
          <BombCounter />
          <Smile />
          <Timer />
        </div>
        <div className={styles.gameBottom}>
          <MineField />
        </div>
      </div>
      <Result />
    </div>
  );
}

export default App;
