import { screen } from "@testing-library/react";
import MyFurbysPage from "./MyFurbysPage";
import { customRender } from "../../testsUtils/customRender";
import furbysApiMock from "../../mocks/furbysApiMock";

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
});
