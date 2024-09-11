import GameRow from "../gameRow/GameRow";
import { GameBoardStyles } from "./GameBoard.style";
import useGameStore from "../../store/gameStore";
import { useEffect } from "react";
import { resetData } from "../../services/gameDataService";
import { GameCodeStyles } from "../header/Header.style";

const GameBoard = () => {
  const { gameCode } = useGameStore();
  const rows = [0, 1, 2];

  useEffect(() => {
    const syncGameData = async () => {
      await resetData();
    };
    syncGameData();
  }, [gameCode]);
  return (
    <>
      <h1
        className="refresh_button"
        style={GameCodeStyles}
      >{`Game Code: ${gameCode}`}</h1>
      <div style={GameBoardStyles}>
        {rows.map((x) => (
          <GameRow x={x} key={`gameRow_${x}`} />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
