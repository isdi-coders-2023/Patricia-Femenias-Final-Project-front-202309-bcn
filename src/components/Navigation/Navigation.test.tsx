import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { customRender } from "../../testsUtils/wrappers";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'My Furbys'", () => {
      const expectedMyFurbysLink = "My Furbys";

      customRender(<Navigation />);

      const myFurbysLink = screen.getByRole("link", {
        name: expectedMyFurbysLink,
      });

      expect(myFurbysLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'New one'", () => {
      const expectedNewOneLink = "New one";

      customRender(<Navigation />);

      const newOneLink = screen.getByRole("link", { name: expectedNewOneLink });

      expect(newOneLink).toBeInTheDocument();
    });
  });
});
