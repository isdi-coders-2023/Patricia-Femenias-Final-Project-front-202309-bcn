import { fireEvent, screen, waitFor } from "@testing-library/react";
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

      await waitFor(() => expect(inputText));
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

  describe("When it is rendered and the user tpes in every input", () => {
    test("Then it should");
  });
});
