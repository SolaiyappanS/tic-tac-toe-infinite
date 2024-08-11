import useGameStore from "../store/gameStore";
import { db } from "./link";
import { onValue, ref, set } from "firebase/database";

export const newGameCode = (): string => {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var result = "";
  for (var i = 0; i < 6; i++)
    result += charSet.split("")[Math.floor(Math.random() * charSet.length)];
  return result;
};

export const updateData = (key: string, value: any) => {
  set(ref(db, useGameStore.getState().gameCode + "/" + key), value);
};

export const syncData = () => {
  onValue(ref(db, useGameStore.getState().gameCode), (res) => {
    useGameStore.setState({
      isAvailable: res.val().isAvailable,
      blockedCell: res.val().blockedCell,
      isGameWin: res.val().isGameWin,
      coordinates: res.val().coordinates,
      canRefresh: res.val().canRefresh,
      isXTurn: res.val().isXTurn,
      gameCellColors: res.val().gameCellColors,
      gameCellTextShadow: res.val().gameCellTextShadow,
      gameCellValues: res.val().gameCellValues,
      gameWinCells: res.val().gameWinCells,
      winColor: res.val().winColor,
      refreshBtnOpacity: res.val().refreshBtnOpacity,
      refreshBtnColor: res.val().refreshBtnColor,
    });
  });
};

export const createNewGame = () => {
  const gameCode = newGameCode();
  useGameStore.setState({ gameCode: gameCode });
  set(ref(db, gameCode), {
    isAvailable: useGameStore.getInitialState().isAvailable,
    blockedCell: useGameStore.getInitialState().blockedCell,
    isGameWin: useGameStore.getInitialState().isGameWin,
    coordinates: useGameStore.getInitialState().coordinates,
    canRefresh: useGameStore.getInitialState().canRefresh,
    isXTurn: useGameStore.getInitialState().isXTurn,
    gameCellColors: useGameStore.getInitialState().gameCellColors,
    gameCellTextShadow: useGameStore.getInitialState().gameCellTextShadow,
    gameCellValues: useGameStore.getInitialState().gameCellValues,
    gameWinCells: useGameStore.getInitialState().gameWinCells,
    winColor: useGameStore.getInitialState().winColor,
    refreshBtnOpacity: useGameStore.getInitialState().refreshBtnOpacity,
    refreshBtnColor: useGameStore.getInitialState().refreshBtnColor,
  });
};
