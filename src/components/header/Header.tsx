import { refreshBoard } from "../../services/gameControls";
import useGameStore from "../../store/gameStore";
import { HeaderStyles, RefreshButton } from "./Header.style";

const Header = () => {
  const { refreshBtnColor, refreshBtnOpacity } = useGameStore();

  return (
    <>
      <p style={HeaderStyles}>Tic Tac Toe Infinite</p>
      <p
        style={{
          ...RefreshButton,
          color: refreshBtnColor,
          opacity: refreshBtnOpacity,
        }}
        onClick={refreshBoard}
      >
        Refresh Game
      </p>
    </>
  );
};

export default Header;
