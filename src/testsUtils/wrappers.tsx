import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { furbysReducer } from "../store/features/furbys/furbysSlice";
import furbysApiMock from "../mocks/furbysApiMock";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { uiReducer } from "../store/features/ui/uiSlice";
import { store } from "../store";
import { FurbyStructure } from "../store/features/furbys/types";
import newFurbysList from "../mocks/newFurbysList";

export const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { furbysState: furbysReducer, uiState: uiReducer },
    preloadedState: {
      furbysState: {
        furbys: furbysApiMock,
        selectedFurby: newFurbysList[0],
        currentFurby: newFurbysList[0] as FurbyStructure,
      },
      uiState: { isLoading: false },
    },
  });

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <GlobalStyle />
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { furbysState: furbysReducer, uiState: uiReducer },
    preloadedState: {
      furbysState: {
        furbys: furbysApiMock,
        selectedFurby: newFurbysList[0] as FurbyStructure,
        currentFurby: newFurbysList[0] as FurbyStructure,
      },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};
