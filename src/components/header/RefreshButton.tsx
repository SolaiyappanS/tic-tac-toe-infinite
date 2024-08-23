import { refreshBoard } from "../../services/gameControls";
import useGameStore from "../../store/gameStore";
import { RefreshButtonStyles } from "./Header.style";

const RefreshButton = () => {
  const { refreshBtnColor, refreshBtnOpacity } = useGameStore();
  return (
    <button
      className="refresh_button"
      style={{
        ...RefreshButtonStyles,
        borderColor: refreshBtnColor,
        opacity: refreshBtnOpacity,
      }}
      onClick={refreshBoard}
    >
      Refresh Game
    </button>
  );
};

export default RefreshButton;
