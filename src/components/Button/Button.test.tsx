import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Modify'", () => {
    test("Test it should show the text 'Modify'", () => {
      const text = "Modify";

      customRender(<Button text="Modify" />);
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives the text 'Delete'", () => {
    test("Test it should show the text 'Delete'", () => {
      const text = "Delete";

      customRender(<Button text="Delete" />);
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
});
