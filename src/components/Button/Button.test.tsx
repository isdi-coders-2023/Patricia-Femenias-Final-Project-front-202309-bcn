import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../testsUtils/wrappers";
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

  describe("When it receives the action 'delete' and a click", () => {
    test("it should call the received action", async () => {
      const expectedButtonText = "Delete";
      const expectedAction = vi.fn();

      customRender(
        <Button text={expectedButtonText} actionOnClick={expectedAction} />,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(expectedAction).toHaveBeenCalledOnce();
    });
  });
});
