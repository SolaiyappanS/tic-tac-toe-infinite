import Header from "../../components/header/Header";
import HomePage from "../../components/homePage/HomePage";
import useGameStore from "../../store/gameStore";
import GameContainer from "../gameContainer/GameContainer";

const MainContainer = () => {
  const { isGameStarted } = useGameStore();
  return (
    <>
      <Header />
      {isGameStarted ? <GameContainer /> : <HomePage />}
    </>
  );
};

export default MainContainer;
