import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../testsUtils/wrappers";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the My 90s Furby collection's logo", () => {
      const expectedAltText = "My 90s Furby collection logo";

      customRender(<Header />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
