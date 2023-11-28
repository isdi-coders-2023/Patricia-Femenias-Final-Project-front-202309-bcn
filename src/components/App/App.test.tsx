import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should  render a Header with  the My 90s Furby collection's logo", () => {
      const expectedAltText = "My 90s Furby collection logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>,
      );

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
