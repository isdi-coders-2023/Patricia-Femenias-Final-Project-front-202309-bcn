import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
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
