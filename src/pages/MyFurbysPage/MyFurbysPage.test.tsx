import { screen, waitFor } from "@testing-library/react";
import MyFurbysPage from "./MyFurbysPage";
import { customRender } from "../../testsUtils/wrappers";
import furbysApiMock from "../../mocks/furbysApiMock";
import { errorHandlers } from "../../mocks/errorHandlers";
import server from "../../mocks/node";

describe("Given the MyFurbysPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'My Furby collection'", () => {
      const expectedTitle = "My Furby collection";

      customRender(<MyFurbysPage />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a list of Furbys, wich first Furbys name should be 'Peachy'", () => {
      const expectedName = "Peachy";

      customRender(<MyFurbysPage />);
      const name = screen.getByRole("heading", { name: expectedName });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show a list of Furbys, with the Peachys picture at the first position", () => {
      const expectedAltText = furbysApiMock[0].name;

      customRender(<MyFurbysPage />);
      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered but the list of Furbys doesnt appear", () => {
    test("Then it show the error message 'Sorry! We cant found Furbys!'", async () => {
      const expectedErrorMessage = "Sorry! We cant found Furbys!";

      server.use(...errorHandlers);
      customRender(<MyFurbysPage />);

      await waitFor(() => {
        const errorMessage = screen.getByText(expectedErrorMessage);

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
