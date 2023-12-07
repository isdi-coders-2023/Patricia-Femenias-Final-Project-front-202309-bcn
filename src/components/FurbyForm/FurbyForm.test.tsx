import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testsUtils/wrappers";
import FurbyForm from "./FurbyForm";
import userEvent from "@testing-library/user-event";

describe("Given a FurbyForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a'Name:' label text", () => {
      const expectedLabelText = "Name:";

      customRender(<FurbyForm />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });

  describe("when it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const expectedButtonText = "Create";

      customRender(<FurbyForm />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in all the text inputs fields", () => {
    test("Then it should show the writen text in all these fields", async () => {
      const expectedInputText = "Peachy";

      customRender(<FurbyForm />);

      const labelText = screen.getByLabelText("Name:");

      await userEvent.type(labelText, expectedInputText);

      const inputText = screen.getByDisplayValue(expectedInputText);

      await waitFor(() => expect(inputText));
    });
  });
});
