interface GameCellProps {
  x: number;
  y: number;
}

const GameCell = ({ x, y }: GameCellProps) => {
  const pickCell = (x: number, y: number) => {
    console.log(x, y);
  };

  return (
    <div
      id={`gameCell_${x}_${y}`}
      className="gameCell"
      onClick={() => pickCell(x, y)}
    ></div>
  );
};

export default GameCell;
