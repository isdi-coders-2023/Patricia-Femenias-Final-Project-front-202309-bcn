import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/wrappers";
import FurbyForm from "./FurbyForm";
import userEvent from "@testing-library/user-event";

describe("Given a FurbyForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a'Name:' label text", () => {
      const expectedLabelText = "Name:";

      customRender(<FurbyForm submitAction={actionOnClick} />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });

  describe("when it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const expectedButtonText = "Create";

      customRender(<FurbyForm submitAction={actionOnClick} />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in all the text inputs fields", () => {
    test("Then it should show the writen text in all these fields", async () => {
      const expectedInputText = "Peachy";

      customRender(<FurbyForm submitAction={actionOnClick} />);

      const labelText = screen.getByLabelText("Name:");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      expect(inputText).toBeInTheDocument();
    });
  });

  describe("When user clicks on the button to create a new Furby", () => {
    test("Then it should call its onSubmit action", () => {
      customRender(<FurbyForm submitAction={actionOnClick} />);

      const furbyForm = screen.getByLabelText("Name:");
      fireEvent.submit(furbyForm);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When the user types in every input and click ont the Create button", () => {
    test("Then the button should call its onSubmit action", async () => {
      const expectedInputText = "Tiger";
      const expectedInputNumber = 7;
      const ecxpectedButtonText = "Create";

      customRender(<FurbyForm submitAction={actionOnClick} />);

      const inputFurbyElement = screen.getByLabelText("Name:");
      await userEvent.type(inputFurbyElement, expectedInputText);

      const inputFurbysElement = screen.getByLabelText("Type:");
      await userEvent.type(inputFurbysElement, expectedInputText);

      const inputYearElement = screen.getByLabelText("Year:");
      await userEvent.type(inputYearElement, expectedInputNumber.toString());

      const inputGenerationElement = screen.getByLabelText("Generation:");
      await userEvent.type(inputGenerationElement, expectedInputText);

      const inputLanguageElement = screen.getByLabelText("Language:");
      await userEvent.type(inputLanguageElement, expectedInputText);

      const formButtonElement = screen.getByRole("button", {
        name: ecxpectedButtonText,
      });

      await userEvent.click(formButtonElement);

      await expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
