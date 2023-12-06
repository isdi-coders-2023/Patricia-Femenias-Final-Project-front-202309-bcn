import { screen } from "@testing-library/react";
import CreatePage from "./CreatePage";
import { customRender } from "../../testsUtils/wrappers";

describe("Given the CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Add a new Furby'", () => {
      const expectedTitle = "Add a new Furby";

      customRender(<CreatePage />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
