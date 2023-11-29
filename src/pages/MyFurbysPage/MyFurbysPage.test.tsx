import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import MyFurbysPage from "./MyFurbysPage";

describe("Given the MyFurbysPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'My Furby collection'", () => {
      const expectedTitle = "My Furby collection";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <MyFurbysPage />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
