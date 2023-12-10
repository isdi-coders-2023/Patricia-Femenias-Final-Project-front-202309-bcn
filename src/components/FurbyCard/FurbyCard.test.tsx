import { screen, waitFor } from "@testing-library/react";
import furbyApiMock from "../../mocks/FurbyApiMock";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../testsUtils/wrappers";
import FurbyCard from "./FurbyCard";
import { errorHandlers } from "../../mocks/errorHandlers";
import server from "../../mocks/node";

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
      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Delete'", () => {
      const expectedButtonText = "Delete";

      customRender(<FurbyCard furby={furbyApiMock} />);
      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When the card with the Furby Peachy is rendered and the user clicks on the button 'Delete'", () => {
    const expectedButtonText = "Delete";

    test("Then it should show the positive feedback message 'Great! your Furby has been deleted!'", async () => {
      const expectedMessage = "Great! your Furby has been deleted!";

      customRender(<FurbyCard furby={furbyApiMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(deleteButton);

      const message = screen.getByText(expectedMessage);

      expect(message).toBeInTheDocument();
    });

    test("Then it should show the positive feedback message 'Sorry, we coudnt delete your Furby!'", async () => {
      const expectedErrorMessage = "Sorry, we couldn't delete your Furby!";

      server.use(...errorHandlers);

      customRender(<FurbyCard furby={furbyApiMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(deleteButton);

      const message = screen.getByText(expectedErrorMessage);

      await waitFor(() => {
        expect(message).toBeInTheDocument();
      });
    });
  });
});
