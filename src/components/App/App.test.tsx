import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Header from "../Header/Header";

describe("Given an App component", () => {
  describe("When it renders a Header", () => {
    test("Then it should show the My 90s Furby collection's logo", () => {
      const expectedAltText = "My 90s Furby collection logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
