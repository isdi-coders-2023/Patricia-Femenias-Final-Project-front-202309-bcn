import { screen } from "@testing-library/react";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testsUtils/wrappers";
import DetailPage from "./DetailPage";
import { MemoryRouter } from "react-router-dom";

describe("Given a DetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'My Furby's details' into a heading", () => {
      const expectedTitle = "My Furby's details";

      customRender(<DetailPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button to delete the selected Furby", () => {
      const expectedButtonText = "Delete";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/"]}>
          <DetailPage />
        </MemoryRouter>,
      );
      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeInTheDocument();
    });

    test("Then it should show a button to modify the selected Furby", () => {
      const expectedButtonText = "Modify";

      customRender(<DetailPage />);
      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeInTheDocument();
    });
  });
});
