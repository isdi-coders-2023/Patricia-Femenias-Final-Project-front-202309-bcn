import { screen } from "@testing-library/react";
import furbyApiMock from "../../mocks/FurbyApiMock";
import customRender from "../../testsUtils/customRender";
import FurbyCard from "./FurbyCard";

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
});
