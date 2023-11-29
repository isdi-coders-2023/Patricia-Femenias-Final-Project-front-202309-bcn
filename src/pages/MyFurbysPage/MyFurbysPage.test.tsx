import { screen } from "@testing-library/react";
import MyFurbysPage from "./MyFurbysPage";
import customRender from "../../testsUtils/customRender";

describe("Given the MyFurbysPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'My Furby collection'", () => {
      const expectedTitle = "My Furby collection";

      customRender(<MyFurbysPage />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
