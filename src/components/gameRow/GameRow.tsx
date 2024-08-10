import GameCell from "../gameCell/GameCell";

interface GameRowProps {
  x: number;
}

const GameRow = ({ x }: GameRowProps) => {
  const columns = [0, 1, 2];
  return (
    <div>
      {columns.map((y) => (
        <GameCell x={x} y={y} key={`gameCell_${x}_${y}`} />
      ))}
    </div>
  );
};

export default GameRow;
