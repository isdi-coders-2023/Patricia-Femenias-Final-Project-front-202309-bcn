import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/wrappers";
import ModifyPage from "./ModifyPage";

describe("Given a DetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Modify your Furby' into a heading", () => {
      const expectedTitle = "Modify your Furby";

      customRender(<ModifyPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a form with a 'Name:' label text", () => {
      const expectedLabelText = "Name:";

      customRender(<ModifyPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });
});
