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

export const pickCell = async (x: number, y: number) => {
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
      await setGameCellColors(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        "#0000"
      );
      await setGameCellValues(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        ""
      );
      await setIsAvailable(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        true
      );
    }
    await setCanRefresh(true);
    for (var i = 0; i < 5; i++) {
      await setCoordinates(i, useGameStore.getState().coordinates[i + 1]);
    }
    await setCoordinates(5, [x, y]);
    await setIsAvailable(x, y, false);
    if (
      useGameStore.getState().coordinates[0][0] != -1 &&
      useGameStore.getState().coordinates[0][1] != -1
    ) {
      await setGameCellColors(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        useGameStore.getState().isXTurn ? "#ff04" : "#0ff4"
      );
      await setIsAvailable(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1],
        true
      );
      await setBlockedCell(
        useGameStore.getState().coordinates[0][0],
        useGameStore.getState().coordinates[0][1]
      );
    }
    await setGameCellColors(
      x,
      y,
      useGameStore.getState().isXTurn ? "#0ff" : "#ff0"
    );
    await setGameCellValues(x, y, useGameStore.getState().isXTurn ? "X" : "O");
    await setIsXturn(!useGameStore.getState().isXTurn);
  }
  await checkGameWin();
  await setRefreshBtnOpacity(useGameStore.getState().canRefresh ? "1" : "0.3");
};

const isWin = (c1: number[], c2: number[], c3: number[]) =>
  useGameStore.getState().gameCellValues[c1[0]][c1[1]] ===
    useGameStore.getState().gameCellValues[c2[0]][c2[1]] &&
  useGameStore.getState().gameCellValues[c2[0]][c2[1]] ===
    useGameStore.getState().gameCellValues[c3[0]][c3[1]] &&
  useGameStore.getState().gameCellValues[c1[0]][c1[1]].trim() !== "";

const makeWin = async (c1: number[], c2: number[], c3: number[]) => {
  await setIsGameWin(true);
  await setGameWinCells(c1, c2, c3);
  await setWinColor(
    useGameStore.getState().gameCellValues[c1[0]][c1[1]] === "X"
      ? "#0ff"
      : "#ff0"
  );
};

export const refreshBoard = async () => {
  if (useGameStore.getState().canRefresh) {
    for (var i = 0; i < 3; i++)
      for (var j = 0; j < 3; j++) {
        await setGameCellValues(i, j, "");
        await setIsAvailable(i, j, true);
        await setGameCellTextShadow(i, j, "none");
      }
    await setIsXturn(true);
    for (var i = 0; i < 6; i++) await setCoordinates(i, [-1, -1]);
    await setCanRefresh(false);
    await setIsGameWin(false);
    await setBlockedCell(-1, -1);
  }
  await setRefreshBtnOpacity(useGameStore.getState().canRefresh ? "1" : "0.3");
  await setRefreshBtnColor("#0000");
};

const checkGameWin = async () => {
  if (isWin([0, 0], [0, 1], [0, 2])) await makeWin([0, 0], [0, 1], [0, 2]);
  else if (isWin([1, 0], [1, 1], [1, 2])) await makeWin([1, 0], [1, 1], [1, 2]);
  else if (isWin([2, 0], [2, 1], [2, 2])) await makeWin([2, 0], [2, 1], [2, 2]);
  else if (isWin([0, 0], [1, 0], [2, 0])) await makeWin([0, 0], [1, 0], [2, 0]);
  else if (isWin([0, 1], [1, 1], [2, 1])) await makeWin([0, 1], [1, 1], [2, 1]);
  else if (isWin([0, 2], [1, 2], [2, 2])) await makeWin([0, 2], [1, 2], [2, 2]);
  else if (isWin([0, 0], [1, 1], [2, 2])) await makeWin([0, 0], [1, 1], [2, 2]);
  else if (isWin([0, 2], [1, 1], [2, 0])) await makeWin([0, 2], [1, 1], [2, 0]);
  else {
    await setIsGameWin(false);
    await setGameWinCells([-1, -1], [-1, -1], [-1, -1]);
    await setWinColor("#0000");
  }
  if (useGameStore.getState().isGameWin) {
    for (var i = 0; i < 3; i++) {
      await setGameCellColors(
        useGameStore.getState().gameWinCells[i][0],
        useGameStore.getState().gameWinCells[i][1],
        "#fffa"
      );
      await setGameCellTextShadow(
        useGameStore.getState().gameWinCells[i][0],
        useGameStore.getState().gameWinCells[i][1],
        `0 0 0.25vh ${useGameStore.getState().winColor}, 0 0 0.5vh ${
          useGameStore.getState().winColor
        }, 0 0 1vh ${useGameStore.getState().winColor}`
      );
    }
    await setRefreshBtnColor(useGameStore.getState().winColor);
    await setRefreshBtnOpacity(
      useGameStore.getState().canRefresh ? "1" : "0.3"
    );
  }
};
