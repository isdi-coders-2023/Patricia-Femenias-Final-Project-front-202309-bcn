import {
  hideErrorActionCreator,
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives an currentUiState with the property isLoading in false", () => {
    test("Then it should change it to true", () => {
      const initialMockedUiState = { isLoading: false };
      const isLoadingTrue = uiReducer(
        initialMockedUiState,
        showLoadingActionCreator(),
      );

      expect(isLoadingTrue).toStrictEqual({ isLoading: true });
    });
  });
});

describe("Given a hideLoading minireducer", () => {
  describe("When it receives a currentUiState with the property isLoading in true", () => {
    test("Then it should change it to false", () => {
      const initialMockedUiState = { isLoading: true };
      const isLoadingFalse = uiReducer(
        initialMockedUiState,
        hideLoadingActionCreator(),
      );

      expect(isLoadingFalse).toStrictEqual({ isLoading: false });
    });
  });
});

describe("Given a showError minireducer", () => {
  describe("When it receives a currentUiState with the property isError in false", () => {
    test("Then it should change it to true", () => {
      const initialMockedUiState = { isError: false };
      const isErrorTrue = uiReducer(
        initialMockedUiState,
        showErrorActionCreator(),
      );

      expect(isErrorTrue).toStrictEqual({ isError: true });
    });
  });
});

describe("Given a hideError minireducer", () => {
  describe("When it receives a currentUiState with the property isError in true", () => {
    test("Then it should change it to false", () => {
      const initialMockedUiState = { isError: true };
      const isErrorFalse = uiReducer(
        initialMockedUiState,
        hideErrorActionCreator(),
      );

      expect(isErrorFalse).toStrictEqual({ isError: false });
    });
  });
});
