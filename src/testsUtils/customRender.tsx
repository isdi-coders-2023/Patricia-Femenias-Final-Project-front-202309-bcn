import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { furbysReducer } from "../store/features/furbys/furbysSlice";
import furbysApiMock from "../mocks/furbysApiMock";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { furbysState: furbysReducer },
    preloadedState: { furbysState: { furbys: furbysApiMock } },
  });

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export default customRender;
