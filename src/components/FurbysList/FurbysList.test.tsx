import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/wrappers";
import FurbysList from "./FurbysList";
import furbysApiMock from "../../mocks/furbysApiMock";

describe("Given a FurbysList component", () => {
  describe("When it is called with a list of two Furbys", () => {
    test("Then it should show two Furbys", () => {
      const expectedNumberOfFurbys = 2;

      customRender(<FurbysList />);
      const furbysList = screen.getAllByRole("heading").length;

      expect(furbysList).toBe(expectedNumberOfFurbys);
    });

    test("Then it should show at the first position, one Furby with his name 'Peachy' into a heading", () => {
      const expectedName = "Peachy";

      customRender(<FurbysList />);
      const title = screen.getByRole("heading", { name: expectedName });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show at the first position, the picture of Peachy Furby", () => {
      const expectedAltText = furbysApiMock[0].name;

      customRender(<FurbysList />);
      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
