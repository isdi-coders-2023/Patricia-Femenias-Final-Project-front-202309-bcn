import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/wrappers";
import FurbyForm from "./FurbyForm";

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
});
