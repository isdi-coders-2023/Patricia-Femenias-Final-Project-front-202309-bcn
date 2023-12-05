import { screen, waitFor } from "@testing-library/react";
import furbyApiMock from "../../mocks/FurbyApiMock";
import { customRender } from "../../testsUtils/wrappers";
import FurbyCard from "./FurbyCard";
import userEvent from "@testing-library/user-event";

describe("Given a FurbyCard component", () => {
  describe("When it receives Peachy's data", () => {
    test("Then it should show the name 'Peachy' into a heading as first Furby", () => {
      const peachy = furbyApiMock;

      customRender(<FurbyCard furby={furbyApiMock} />);
      const furbyName = screen.getByRole("heading", { name: peachy.name });

      expect(furbyName).toBeInTheDocument();
    });
  });

  describe("When it receives Peachy's data", () => {
    test("Then it should show a picture of Peachy as first Furby", () => {
      const expectedAltText = furbyApiMock.name;

      customRender(<FurbyCard furby={furbyApiMock} />);
      const picture = screen.getByAltText(expectedAltText);

      expect(picture).toBeInTheDocument();
    });
  });

  describe("when it is rendered", () => {
    test("Then it should show a button with the text 'Modify'", () => {
      const expectedButtonText = "Modify";

      customRender(<FurbyCard furby={furbyApiMock} />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Delete'", () => {
      const expectedButtonText = "Delete";

      customRender(<FurbyCard furby={furbyApiMock} />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When the card with the Furby Peachy is rendered and the user clicks on the button 'Delete'", () => {
    test("The it should remove the card", async () => {
      const expectedButtonText = "Delete";

      customRender(<FurbyCard furby={furbyApiMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });
      const furbyName = screen.getByRole("heading", { name: "Peachy" });

      await userEvent.click(deleteButton);

      waitFor(() => {
        expect(furbyName).not.toBeInTheDocument();
      });
    });
  });
});
