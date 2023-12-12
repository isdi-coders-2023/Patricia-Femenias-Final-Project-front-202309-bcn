import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FurbyStateStructure, FurbyStructure } from "./types";

export const initialFurbysState: FurbyStateStructure = {
  furbys: [],
  selectedFurby: {} as FurbyStructure,
  currentFurby: {
    _id: "",
    type: "",
    year: 0,
    generation: 0,
    name: "",
    howFoundIt: "",
    imageUrl: "",
    language: "",
    price: 0,
  } as FurbyStructure,
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
    modifyCurrentFurby: (
      currentState: FurbyStateStructure,
      action: PayloadAction<FurbyStructure>,
    ): FurbyStateStructure => ({
      ...currentState,
      furbys: currentState.furbys.map((furby) =>
        furby._id !== action.payload._id ? furby : action.payload,
      ),
    }),
  },
});

export const furbysReducer = furbysSlice.reducer;

export const {
  loadFurbys: loadFurbysActionCreator,
  deleteFurby: deleteFurbyActionCreator,
  addNewFurby: addNewFurbyActionCreator,
  loadSelectedFurby: loadSelectedFurbyActionCreator,
  modifyCurrentFurby: modifyCurrentFurbyActionCreator,
} = furbysSlice.actions;
