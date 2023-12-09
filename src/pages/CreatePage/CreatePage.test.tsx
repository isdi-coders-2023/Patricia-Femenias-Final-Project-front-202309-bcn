import { screen } from "@testing-library/react";
import CreatePage from "./CreatePage";
import { customRender } from "../../testsUtils/wrappers";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import {
  FurbyStateStructure,
  FurbyStructure,
} from "../../store/features/furbys/types";

describe("Given the CreatePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'Add a new Furby'", () => {
      const expectedTitle = "Add a new Furby";

      customRender(<CreatePage />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a form", () => {
      const expectedLabelText = "Name:";

      customRender(<CreatePage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create'", () => {
      const expectedButtonText = "Create";

      customRender(<CreatePage />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and it shows a form that user send", () => {
    test("Then it should call its onSubmit action", async () => {
      const expectedButtonName = "Create";
      const expectedFurbysState: FurbyStateStructure = {
        furbys: [],
        selectedFurby: {} as FurbyStructure,
      };

      customRender(<CreatePage />);

      const buttonForm = screen.getByRole("button", {
        name: expectedButtonName,
      });

      await userEvent.click(buttonForm);

      const updatedFurbysState = store.getState().furbysState;

      expect(updatedFurbysState).toStrictEqual(expectedFurbysState);
    });
  });
});
