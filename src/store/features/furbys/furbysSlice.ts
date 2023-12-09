import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FurbyStateStructure, FurbyStructure } from "./types";

export const initialFurbysState: FurbyStateStructure = {
  furbys: [],
  selectedFurby: {} as FurbyStructure,
};

const furbysSlice = createSlice({
  name: "furbys",
  initialState: initialFurbysState,
  reducers: {
    loadFurbys: (
      currentState,
      action: PayloadAction<FurbyStructure[]>,
    ): FurbyStateStructure => ({
      ...currentState,
      furbys: action.payload,
    }),

    deleteFurby: (
      currentState,
      action: PayloadAction<string>,
    ): FurbyStateStructure => ({
      ...currentState,
      furbys: currentState.furbys.filter(
        (furby) => furby._id !== action.payload,
      ),
    }),

    addNewFurby: (
      currentState,
      action: PayloadAction<FurbyStructure>,
    ): FurbyStateStructure => ({
      ...currentState,
      furbys: [...currentState.furbys, action.payload],
    }),

    loadSelectedFurby: (
      currentState,
      action: PayloadAction<FurbyStructure>,
    ) => ({
      ...currentState,
      selectedFurby: action.payload,
    }),
  },
});

export const furbysReducer = furbysSlice.reducer;

export const {
  loadFurbys: loadFurbysActionCreator,
  deleteFurby: deleteFurbyActionCreator,
  addNewFurby: addNewFurbyActionCreator,
  loadSelectedFurby: loadSelectedFurbyActionCreator,
} = furbysSlice.actions;
