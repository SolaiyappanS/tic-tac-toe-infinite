import { useState } from "react";
import { ButtonStyles, InputStyles } from "./HomePage.style";
import { createNewGame, syncData } from "../../services/gameDataService";
import useGameStore from "../../store/gameStore";

const HomePage = () => {
  const [disabled, setDisabled] = useState(true);
  const [draftGameCode, setDraftGameCode] = useState("");
  const { setGameCode, setIsGameStarted } = useGameStore();

  const handleChange = (value: string) => {
    setDraftGameCode(value.toUpperCase());
    setDisabled(!/^[a-zA-Z0-9]{6}$/.test(value.trim()));
  };

  const handleKeyDown = (value: string) => {
    if (value.toLowerCase() === "enter") joinGame();
  };

  const joinGame = async () => {
    if (!disabled) {
      setGameCode(draftGameCode);
      await syncData();
      setIsGameStarted(true);
    }
  };

  const newOnlineGame = async () => {
    await createNewGame();
    setIsGameStarted(true);
  };

  const newOfflineGame = () => {
    setGameCode("Offline");
    setIsGameStarted(true);
  };

  return (
    <>
      <div
        className="home_button"
        style={{ ...ButtonStyles, top: "30vh" }}
        onClick={newOnlineGame}
      >
        New Online Game
      </div>
      <input
        type="text"
        placeholder="Enter Existing Game Code"
        className="home_button"
        style={{ ...InputStyles, top: "37.5vh" }}
        onChange={(e) => handleChange(e.currentTarget.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        value={draftGameCode}
      />
      <div
        className="home_button"
        style={{
          ...ButtonStyles,
          top: "45vh",
          backgroundColor: disabled ? "#fff1" : "#fff2",
          color: disabled ? "#fff2" : "#fff",
          cursor: disabled ? "default" : "pointer",
        }}
        onClick={joinGame}
      >
        Join Existing Game
      </div>
      <div
        className="home_button"
        style={{ ...ButtonStyles, top: "52.5vh" }}
        onClick={newOfflineGame}
      >
        Play Offline
      </div>
    </>
  );
};

export default HomePage;
