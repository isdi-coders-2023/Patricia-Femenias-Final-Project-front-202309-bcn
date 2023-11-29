import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FurbyStateStructure, FurbyStructure } from "./types";

export const initialFurbysState: FurbyStateStructure = {
  furbys: [],
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
  },
});

export const furbysReducer = furbysSlice.reducer;
export const { loadFurbys: loadFurbysActionCreator } = furbysSlice.actions;
