import { create } from "zustand";

interface GameStoreProps {
  blockedCell: number[];
  setBlockedCell: (x: number, y: number) => void;

  canRefresh: boolean;
  setCanRefresh: (value: boolean) => void;

  coordinates: number[][];
  setCoordinates: (position: number, value: number[]) => void;

  gameCellColors: string[][];
  setGameCellColors: (x: number, y: number, value: string) => void;

  gameCellTextShadow: string[][];
  setGameCellTextShadow: (x: number, y: number, value: string) => void;

  gameCellValues: string[][];
  setGameCellValues: (x: number, y: number, value: string) => void;

  gameWinCells: number[][];
  setGameWinCells: (c1: number[], c2: number[], c3: number[]) => void;

  isAvailable: boolean[][];
  setIsAvailable: (x: number, y: number, value: boolean) => void;

  isGameWin: boolean;
  setIsGameWin: (value: boolean) => void;

  isXTurn: boolean;
  setIsXturn: (value: boolean) => void;

  refreshBtnColor: string;
  setRefreshBtnColor: (value: string) => void;

  refreshBtnOpacity: string;
  setRefreshBtnOpacity: (value: string) => void;

  winColor: string;
  setWinColor: (value: string) => void;
}

const useGameStore = create<GameStoreProps>((set) => ({
  blockedCell: [-1, -1],
  setBlockedCell: (x: number, y: number) => {
    const tempBlockedCell = useGameStore.getState().blockedCell;
    tempBlockedCell[0] = x;
    tempBlockedCell[1] = y;
    set({ blockedCell: tempBlockedCell });
  },

  canRefresh: false,
  setCanRefresh: (value: boolean) => set({ canRefresh: value }),

  coordinates: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ],
  setCoordinates: (position: number, value: number[]) => {
    const tempCoordinates = useGameStore.getState().coordinates;
    tempCoordinates[position] = value;
    set({ coordinates: tempCoordinates });
  },

  gameCellColors: [
    ["#0000", "#0000", "#0000"],
    ["#0000", "#0000", "#0000"],
    ["#0000", "#0000", "#0000"],
  ],
  setGameCellColors: (x: number, y: number, value: string) => {
    const tempgameCellColors = useGameStore.getState().gameCellColors;
    tempgameCellColors[x][y] = value;
    set({ gameCellColors: tempgameCellColors });
  },

  gameCellTextShadow: [
    ["none", "none", "none"],
    ["none", "none", "none"],
    ["none", "none", "none"],
  ],
  setGameCellTextShadow: (x: number, y: number, value: string) => {
    const tempGameCellTextShadow = useGameStore.getState().gameCellTextShadow;
    tempGameCellTextShadow[x][y] = value;
    set({ gameCellTextShadow: tempGameCellTextShadow });
  },

  gameCellValues: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  setGameCellValues: (x: number, y: number, value: string) => {
    const tempGameCells = useGameStore.getState().gameCellValues;
    tempGameCells[x][y] = value;
    set({ gameCellValues: tempGameCells });
  },

  gameWinCells: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ],
  setGameWinCells: (c1: number[], c2: number[], c3: number[]) => {
    const tempGameWinCells = useGameStore.getState().gameWinCells;
    tempGameWinCells[0] = c1;
    tempGameWinCells[1] = c2;
    tempGameWinCells[2] = c3;
    set({ gameWinCells: tempGameWinCells });
  },

  isAvailable: [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ],
  setIsAvailable: (x: number, y: number, value: boolean) => {
    const tempIsAvailable = useGameStore.getState().isAvailable;
    tempIsAvailable[x][y] = value;
    set({ isAvailable: tempIsAvailable });
  },

  isGameWin: false,
  setIsGameWin: (value: boolean) => set({ isGameWin: value }),

  isXTurn: true,
  setIsXturn: (value: boolean) => set({ isXTurn: value }),

  refreshBtnColor: "#fff",
  setRefreshBtnColor: (value: string) => set({ refreshBtnColor: value }),

  refreshBtnOpacity: "0.3",
  setRefreshBtnOpacity: (value: string) => set({ refreshBtnOpacity: value }),

  winColor: "#0000",
  setWinColor: (value: string) => set({ winColor: value }),
}));

export default useGameStore;
