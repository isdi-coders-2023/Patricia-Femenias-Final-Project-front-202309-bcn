import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'My Furbys'", () => {
      const expectedMyFurbysLink = "My Furbys";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const MyFurbysLink = screen.getByRole("link", {
        name: expectedMyFurbysLink,
      });

      expect(MyFurbysLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'New one'", () => {
      const expectedNewOneLink = "New one";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const newOneLink = screen.getByRole("link", { name: expectedNewOneLink });

      expect(newOneLink).toBeInTheDocument();
    });
  });
});
