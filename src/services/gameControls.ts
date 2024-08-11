import useGameStore from "../store/gameStore";

const setIsAvailable = useGameStore.getState().setIsAvailable;
const setBlockedCell = useGameStore.getState().setBlockedCell;
const setIsGameWin = useGameStore.getState().setIsGameWin;
const setCoordinates = useGameStore.getState().setCoordinates;
const setCanRefresh = useGameStore.getState().setCanRefresh;
const setIsXturn = useGameStore.getState().setIsXturn;
const setGameCellColors = useGameStore.getState().setGameCellColors;
const setGameCellTextShadow = useGameStore.getState().setGameCellTextShadow;
const setGameCellValues = useGameStore.getState().setGameCellValues;
const setGameWinCells = useGameStore.getState().setGameWinCells;
const setWinColor = useGameStore.getState().setWinColor;
const setRefreshBtnOpacity = useGameStore.getState().setRefreshBtnOpacity;
const setRefreshBtnColor = useGameStore.getState().setRefreshBtnColor;

export const pickCell = (x: number, y: number) => {
  if (
    useGameStore.getState().isAvailable[x][y] &&
    !(
      useGameStore.getState().blockedCell[0] === x &&
      useGameStore.getState().blockedCell[1] === y
    ) &&
    !useGameStore.getState().isGameWin
  ) {
    if (
      useGameStore.getState().coordinates[0][0] != -1 &&
      useGameStore.getState().coordinates[0][1] != -1
    ) {
      setGameCellColors(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        "#0000"
      );
      setGameCellValues(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        ""
      );
      setIsAvailable(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        true
      );
    }
    setCanRefresh(true);
    for (var i = 0; i < 5; i++) {
      setCoordinates(i, useGameStore.getState().coordinates[i + 1]);
    }
    setCoordinates(5, [x, y]);
    setIsAvailable(x, y, false);
    if (
      useGameStore.getState().coordinates[0][0] != -1 &&
      useGameStore.getState().coordinates[0][1] != -1
    ) {
      setGameCellColors(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        useGameStore.getState().isXTurn ? "#ff04" : "#0ff4"
      );
      setIsAvailable(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        true
      );
      setBlockedCell(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1]
      );
    }
    setGameCellColors(x, y, useGameStore.getState().isXTurn ? "#0ff" : "#ff0");
    setGameCellValues(x, y, useGameStore.getState().isXTurn ? "X" : "O");
    setIsXturn(!useGameStore.getState().isXTurn);
  }
  checkGameWin();
  setRefreshBtnOpacity(useGameStore.getState().canRefresh ? "1" : "0.3");
};

const isWin = (c1: number[], c2: number[], c3: number[]) =>
  useGameStore.getState().gameCellValues[c1[0]][c1[1]] ===
    useGameStore.getState().gameCellValues[c2[0]][c2[1]] &&
  useGameStore.getState().gameCellValues[c2[0]][c2[1]] ===
    useGameStore.getState().gameCellValues[c3[0]][c3[1]] &&
  useGameStore.getState().gameCellValues[c1[0]][c1[1]].trim() !== "";

const setWin = (c1: number[], c2: number[], c3: number[]) => {
  setIsGameWin(true);
  setGameWinCells(c1, c2, c3);
  setWinColor(
    useGameStore.getState().gameCellValues[c1[0]][c1[1]] === "X"
      ? "#0ff"
      : "#ff0"
  );
};

export const refreshBoard = () => {
  if (useGameStore.getState().canRefresh) {
    for (var i = 0; i < 3; i++)
      for (var j = 0; j < 3; j++) {
        setGameCellValues(i, j, "");
        setIsAvailable(i, j, true);
        setGameCellTextShadow(i, j, "none");
      }
    setIsXturn(true);
    for (var i = 0; i < 6; i++) setCoordinates(i, [-1, -1]);
    setCanRefresh(false);
    setIsGameWin(false);
    setBlockedCell(-1, -1);
  }
  setRefreshBtnOpacity(useGameStore.getState().canRefresh ? "1" : "0.3");
  setRefreshBtnColor("#0000");
};

const checkGameWin = () => {
  if (isWin([0, 0], [0, 1], [0, 2])) setWin([0, 0], [0, 1], [0, 2]);
  else if (isWin([1, 0], [1, 1], [1, 2])) setWin([1, 0], [1, 1], [1, 2]);
  else if (isWin([2, 0], [2, 1], [2, 2])) setWin([2, 0], [2, 1], [2, 2]);
  else if (isWin([0, 0], [1, 0], [2, 0])) setWin([0, 0], [1, 0], [2, 0]);
  else if (isWin([0, 1], [1, 1], [2, 1])) setWin([0, 1], [1, 1], [2, 1]);
  else if (isWin([0, 2], [1, 2], [2, 2])) setWin([0, 2], [1, 2], [2, 2]);
  else if (isWin([0, 0], [1, 1], [2, 2])) setWin([0, 0], [1, 1], [2, 2]);
  else if (isWin([0, 2], [1, 1], [2, 0])) setWin([0, 2], [1, 1], [2, 0]);
  else {
    setIsGameWin(false);
    setGameWinCells([-1, -1], [-1, -1], [-1, -1]);
    setWinColor("#0000");
  }
  if (useGameStore.getState().isGameWin) {
    for (var i = 0; i < 3; i++) {
      setGameCellColors(
        useGameStore.getState().gameWinCells[i][0],
        useGameStore.getState().gameWinCells[i][1],
        "#fffa"
      );
      setGameCellTextShadow(
        useGameStore.getState().gameWinCells[i][0],
        useGameStore.getState().gameWinCells[i][1],
        `0 0 0.25vh ${useGameStore.getState().winColor}, 0 0 0.5vh ${
          useGameStore.getState().winColor
        }, 0 0 1vh ${useGameStore.getState().winColor}`
      );
    }
    setRefreshBtnColor(useGameStore.getState().winColor);
    setRefreshBtnOpacity(useGameStore.getState().canRefresh ? "1" : "0.3");
  }
};
