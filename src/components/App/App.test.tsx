import { screen } from "@testing-library/react";
import App from "./App";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testsUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import furbysApiMock from "../../mocks/furbysApiMock";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should  show the My 90s Furby collection's logo", () => {
      const expectedAltText = "My 90s Furby collection logo";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });

  describe("When it receives a path to /my-furbys and it renders MyFurbys page", () => {
    test("Then it should show the title 'My 90s Furby collection' into a heading", () => {
      const expectedTitle = "My Furby collection";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/my-furbys"]}>
          <App />
        </MemoryRouter>,
      );
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show at the first position, the picture of the Furby Peachy", () => {
      const expectedAltText = furbysApiMock[0].name;

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/my-furbys"]}>
          <App />
        </MemoryRouter>,
      );
      const picture = screen.getByAltText(expectedAltText);

      expect(picture).toBeInTheDocument();
    });

    test("Then it should show at the first position one Furby with his name 'Peachy' into a heading", () => {
      const expectedName = "Peachy";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/my-furbys"]}>
          <App />
        </MemoryRouter>,
      );
      const name = screen.getByRole("heading", { name: expectedName });

      expect(name).toBeInTheDocument();
    });
  });
});
