import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

export const initialUiState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingAction } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
