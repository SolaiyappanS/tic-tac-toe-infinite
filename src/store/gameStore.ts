import { create } from "zustand";
import { updateData } from "../services/gameDataService";

interface GameStoreProps {
  isGameStarted: boolean;
  setIsGameStarted: (value: boolean) => void;

  gameCode: string;
  setGameCode: (value: string) => void;

  blockedCell: number[];
  setBlockedCell_C: (value: number[]) => Promise<void>;
  setBlockedCell: (x: number, y: number) => Promise<void>;

  canRefresh: boolean;
  setCanRefresh: (value: boolean) => Promise<void>;

  coordinates: number[][];
  setCoordinates_C: (value: number[][]) => Promise<void>;
  setCoordinates: (position: number, value: number[]) => Promise<void>;

  gameCellColors: string[][];
  setGameCellColors_C: (value: string[][]) => Promise<void>;
  setGameCellColors: (x: number, y: number, value: string) => Promise<void>;

  gameCellTextShadow: string[][];
  setGameCellTextShadow_C: (value: string[][]) => Promise<void>;
  setGameCellTextShadow: (x: number, y: number, value: string) => Promise<void>;

  gameCellValues: string[][];
  setGameCellValues_C: (value: string[][]) => Promise<void>;
  setGameCellValues: (x: number, y: number, value: string) => Promise<void>;

  gameWinCells: number[][];
  setGameWinCells_C: (value: number[][]) => Promise<void>;
  setGameWinCells: (c1: number[], c2: number[], c3: number[]) => Promise<void>;

  isAvailable: boolean[][];
  setIsAvailable_C: (value: boolean[][]) => Promise<void>;
  setIsAvailable: (x: number, y: number, value: boolean) => Promise<void>;

  isGameWin: boolean;
  setIsGameWin: (value: boolean) => Promise<void>;

  isXTurn: boolean;
  setIsXturn: (value: boolean) => Promise<void>;

  refreshBtnColor: string;
  setRefreshBtnColor: (value: string) => Promise<void>;

  refreshBtnOpacity: string;
  setRefreshBtnOpacity: (value: string) => Promise<void>;

  winColor: string;
  setWinColor: (value: string) => Promise<void>;
}

const useGameStore = create<GameStoreProps>((set) => ({
  isGameStarted: false,
  setIsGameStarted: (value: boolean) => set({ isGameStarted: value }),

  gameCode: "Offline",
  setGameCode: (value: string) => set({ gameCode: value }),

  blockedCell: [-1, -1],
  setBlockedCell_C: async (value: number[]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ blockedCell: value });
    else await updateData("blockedCell", value);
  },
  setBlockedCell: async (x: number, y: number) => {
    const tempBlockedCell = useGameStore.getState().blockedCell;
    tempBlockedCell[0] = x;
    tempBlockedCell[1] = y;
    if (useGameStore.getState().gameCode === "Offline")
      set({ blockedCell: tempBlockedCell });
    else await updateData("blockedCell", tempBlockedCell);
  },

  canRefresh: false,
  setCanRefresh: async (value: boolean) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ canRefresh: value });
    else await updateData("canRefresh", value);
  },

  coordinates: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ],
  setCoordinates_C: async (value: number[][]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ coordinates: value });
    else await updateData("coordinates", value);
  },
  setCoordinates: async (position: number, value: number[]) => {
    const tempCoordinates = useGameStore.getState().coordinates;
    tempCoordinates[position] = value;
    if (useGameStore.getState().gameCode === "Offline")
      set({ coordinates: tempCoordinates });
    else await updateData("coordinates", tempCoordinates);
  },

  gameCellColors: [
    ["#0000", "#0000", "#0000"],
    ["#0000", "#0000", "#0000"],
    ["#0000", "#0000", "#0000"],
  ],
  setGameCellColors_C: async (value: string[][]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameCellColors: value });
    else await updateData("gameCellColors", value);
  },
  setGameCellColors: async (x: number, y: number, value: string) => {
    const tempgameCellColors = useGameStore.getState().gameCellColors;
    tempgameCellColors[x][y] = value;
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameCellColors: tempgameCellColors });
    else await updateData("gameCellColors", tempgameCellColors);
  },

  gameCellTextShadow: [
    ["none", "none", "none"],
    ["none", "none", "none"],
    ["none", "none", "none"],
  ],
  setGameCellTextShadow_C: async (value: string[][]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameCellTextShadow: value });
    else await updateData("gameCellTextShadow", value);
  },
  setGameCellTextShadow: async (x: number, y: number, value: string) => {
    const tempGameCellTextShadow = useGameStore.getState().gameCellTextShadow;
    tempGameCellTextShadow[x][y] = value;
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameCellTextShadow: tempGameCellTextShadow });
    else await updateData("gameCellTextShadow", tempGameCellTextShadow);
  },

  gameCellValues: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  setGameCellValues_C: async (value: string[][]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameCellValues: value });
    else await updateData("gameCellValues", value);
  },
  setGameCellValues: async (x: number, y: number, value: string) => {
    const tempGameCells = useGameStore.getState().gameCellValues;
    tempGameCells[x][y] = value;
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameCellValues: tempGameCells });
    else await updateData("gameCellValues", tempGameCells);
  },

  gameWinCells: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ],
  setGameWinCells_C: async (value: number[][]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameWinCells: value });
    else await updateData("gameWinCells", value);
  },
  setGameWinCells: async (c1: number[], c2: number[], c3: number[]) => {
    const tempGameWinCells = useGameStore.getState().gameWinCells;
    tempGameWinCells[0] = c1;
    tempGameWinCells[1] = c2;
    tempGameWinCells[2] = c3;
    if (useGameStore.getState().gameCode === "Offline")
      set({ gameWinCells: tempGameWinCells });
    else await updateData("gameWinCells", tempGameWinCells);
  },

  isAvailable: [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ],
  setIsAvailable_C: async (value: boolean[][]) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ isAvailable: value });
    else await updateData("isAvailable", value);
  },
  setIsAvailable: async (x: number, y: number, value: boolean) => {
    const tempIsAvailable = useGameStore.getState().isAvailable;
    tempIsAvailable[x][y] = value;
    if (useGameStore.getState().gameCode === "Offline")
      set({ isAvailable: tempIsAvailable });
    else await updateData("isAvailable", tempIsAvailable);
  },

  isGameWin: false,
  setIsGameWin: async (value: boolean) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ isGameWin: value });
    else await updateData("isGameWin", value);
  },

  isXTurn: true,
  setIsXturn: async (value: boolean) => {
    if (useGameStore.getState().gameCode === "Offline") set({ isXTurn: value });
    else await updateData("isXTurn", value);
  },

  refreshBtnColor: "#0000",
  setRefreshBtnColor: async (value: string) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ refreshBtnColor: value });
    else await updateData("refreshBtnColor", value);
  },

  refreshBtnOpacity: "0.3",
  setRefreshBtnOpacity: async (value: string) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ refreshBtnOpacity: value });
    else await updateData("refreshBtnOpacity", value);
  },

  winColor: "#0000",
  setWinColor: async (value: string) => {
    if (useGameStore.getState().gameCode === "Offline")
      set({ winColor: value });
    else await updateData("winColor", value);
  },
}));

export default useGameStore;
