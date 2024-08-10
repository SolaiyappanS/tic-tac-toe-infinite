import GameRow from "../gameRow/GameRow";
import { GameBoardStyles } from "./GameBoard.style";

const GameBoard = () => {
  const rows = [0, 1, 2];
  return (
    <div style={GameBoardStyles}>
      {rows.map((x) => (
        <GameRow x={x} key={`gameRow_${x}`} />
      ))}
    </div>
  );
};

export default GameBoard;
