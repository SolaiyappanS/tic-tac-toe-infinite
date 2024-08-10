import GameRow from "../gameRow/GameRow";

const GameBoard = () => {
  const rows = [0, 1, 2];
  return (
    <div id="gameBoard">
      {rows.map((x) => (
        <GameRow x={x} />
      ))}
    </div>
  );
};

export default GameBoard;
