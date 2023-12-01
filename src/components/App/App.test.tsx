import { screen } from "@testing-library/react";
import App from "./App";
import { customRender } from "../../testsUtils/customRender";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should  show the My 90s Furby collection's logo", () => {
      const expectedAltText = "My 90s Furby collection logo";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
