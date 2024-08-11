import { useState } from "react";
import { ButtonStyles, InputStyles } from "./HomePage.style";
import { createNewGame } from "../../services/gameDataService";

const HomePage = () => {
  const [disabled, setDisabled] = useState(true);
  const [draftGameCode, setDraftGameCode] = useState("");

  const handleChange = (value: string) => {
    setDraftGameCode(value.toUpperCase());
    setDisabled(!/^[a-zA-Z0-9]{6}$/.test(value.trim()));
  };

  const handleKeyDown = (value: string) => {
    if (value.toLowerCase() === "enter") joinGame();
  };

  const joinGame = () => {
    if (!disabled) console.log("joined: " + draftGameCode);
  };

  return (
    <>
      <div
        className="home_button"
        style={{ ...ButtonStyles, top: "30vh" }}
        onClick={createNewGame}
      >
        New Game
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
      <div className="home_button" style={{ ...ButtonStyles, top: "52.5vh" }}>
        Play Offline
      </div>
    </>
  );
};

export default HomePage;
