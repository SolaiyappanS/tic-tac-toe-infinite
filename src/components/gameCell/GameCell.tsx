import useGameStore from "../../store/gameStore";
import { pickCell } from "./../../services/gameControls";
import { GameCellStyles } from "./GameCell.style";

interface GameCellProps {
  x: number;
  y: number;
}

const GameCell = ({ x, y }: GameCellProps) => {
  const { gameCellValues, gameCellColors, gameCellTextShadow } = useGameStore();

  return (
    <div
      onClick={() => pickCell(x, y)}
      style={{
        ...GameCellStyles(x, y),
        color: gameCellColors[x][y],
        textShadow: gameCellTextShadow[x][y],
      }}
    >
      {gameCellValues[x][y] || <>&nbsp;</>}
    </div>
  );
};

export default GameCell;
