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

export const updateData = async (key: string, value: any) => {
  await set(ref(db, useGameStore.getState().gameCode + "/" + key), value);
};

export const syncData = () => {
  onValue(
    ref(db, useGameStore.getState().gameCode),
    (res) => {
      console.log(res.val());
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
    },
    () => {
      resetData();
    }
  );
};

export const createNewGame = async () => {
  const gameCode = newGameCode();
  useGameStore.setState({ gameCode: gameCode });
  await resetData();
  syncData();
};

export const resetData = async () => {
  const setIsAvailable_C = useGameStore.getState().setIsAvailable_C;
  const setBlockedCell_C = useGameStore.getState().setBlockedCell_C;
  const setIsGameWin = useGameStore.getState().setIsGameWin;
  const setCoordinates_C = useGameStore.getState().setCoordinates_C;
  const setCanRefresh = useGameStore.getState().setCanRefresh;
  const setIsXturn = useGameStore.getState().setIsXturn;
  const setGameCellColors_C = useGameStore.getState().setGameCellColors_C;
  const setGameCellTextShadow_C =
    useGameStore.getState().setGameCellTextShadow_C;
  const setGameCellValues_C = useGameStore.getState().setGameCellValues_C;
  const setGameWinCells_C = useGameStore.getState().setGameWinCells_C;
  const setWinColor = useGameStore.getState().setWinColor;
  const setRefreshBtnOpacity = useGameStore.getState().setRefreshBtnOpacity;
  const setRefreshBtnColor = useGameStore.getState().setRefreshBtnColor;

  await setIsAvailable_C(useGameStore.getInitialState().isAvailable);
  await setBlockedCell_C(useGameStore.getInitialState().blockedCell);
  await setIsGameWin(useGameStore.getInitialState().isGameWin);
  await setCoordinates_C(useGameStore.getInitialState().coordinates);
  await setCanRefresh(useGameStore.getInitialState().canRefresh);
  await setIsXturn(useGameStore.getInitialState().isXTurn);
  await setGameCellColors_C(useGameStore.getInitialState().gameCellColors);
  await setGameCellTextShadow_C(
    useGameStore.getInitialState().gameCellTextShadow
  );
  await setGameCellValues_C(useGameStore.getInitialState().gameCellValues);
  await setGameWinCells_C(useGameStore.getInitialState().gameWinCells);
  await setWinColor(useGameStore.getInitialState().winColor);
  await setRefreshBtnOpacity(useGameStore.getInitialState().refreshBtnOpacity);
  await setRefreshBtnColor(useGameStore.getInitialState().refreshBtnColor);
};
