import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { customRender } from "../../testsUtils/customRender";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'My Furbys'", () => {
      const expectedMyFurbysLink = "My Furbys";

      customRender(<Navigation />);

      const MyFurbysLink = screen.getByRole("link", {
        name: expectedMyFurbysLink,
      });

      expect(MyFurbysLink).toBeInTheDocument();
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
