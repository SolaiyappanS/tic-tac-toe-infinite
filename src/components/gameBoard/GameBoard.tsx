import GameRow from "../gameRow/GameRow";
import { GameBoardStyles } from "./GameBoard.style";
import useGameStore from "../../store/gameStore";
import { useEffect } from "react";
import { resetData } from "../../services/gameDataService";

const GameBoard = () => {
  const { gameCode, refreshBtnColor, refreshBtnOpacity } = useGameStore();
  const rows = [0, 1, 2];

  useEffect(() => {
    const syncGameData = async () => {
      await resetData();
    };
    syncGameData();
  }, [gameCode]);
  return (
    <>
      <h1>{`${gameCode}, ${refreshBtnColor}, ${refreshBtnOpacity}`}</h1>
      <div style={GameBoardStyles}>
        {rows.map((x) => (
          <GameRow x={x} key={`gameRow_${x}`} />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
