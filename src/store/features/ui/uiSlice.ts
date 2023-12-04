import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "./types";

export const initialUiState: UiStructure = {
  isLoading: false,
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showError: (currentUiState) => ({
      ...currentUiState,
      isError: true,
    }),
    hideError: (currentUiState) => ({
      ...currentUiState,
      isError: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showError: showErrorActionCreator,
  hideError: hideErrorActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
