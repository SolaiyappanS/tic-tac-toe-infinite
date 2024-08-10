import GameCell from "../gameCell/GameCell";

interface GameRowProps {
  x: number;
}

const GameRow = ({ x }: GameRowProps) => {
  const columns = [0, 1, 2];
  return (
    <div className="gameRow">
      {columns.map((y) => (
        <GameCell x={x} y={y} />
      ))}
    </div>
  );
};

export default GameRow;
