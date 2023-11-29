import { screen } from "@testing-library/react";
import furbysApiMock from "../../mocks/furbysApiMock";
import customRender from "../../testsUtils/customRender";
import FurbysList from "./FurbysList";

describe("Given a FurbysList component", () => {
  describe("When it is called with a list of Furbys", () => {
    test("Then it should show the name of Peachy at the first position", () => {
      const expectedFirstName = furbysApiMock[0].name;

      customRender(<FurbysList />);

      const name = screen.getByText(expectedFirstName);

      expect(name).toBeInTheDocument();
    });
  });
});
