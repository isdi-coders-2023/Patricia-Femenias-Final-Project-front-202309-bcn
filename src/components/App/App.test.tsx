import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testsUtils/wrappers";
import furbysApiMock from "../../mocks/furbysApiMock";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should  show the My 90s Furby collection's logo", () => {
      const expectedAltText = "My 90s Furby collection logo";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });

    test("Then it should show a navigationbar with the link wirh the text'My Furbys'", () => {
      const expectedMyFurbysLink = "My Furbys";

      customRender(<App />);
      const myFurbysLink = screen.getByRole("link", {
        name: expectedMyFurbysLink,
      });

      expect(myFurbysLink).toBeInTheDocument();
    });

    test("Then it should show a navigationbar with the link wirh the text'My Furbys'", () => {
      const expectedMyFurbysLink = "My Furbys";

      customRender(<App />);
      const myFurbysLink = screen.getByRole("link", {
        name: expectedMyFurbysLink,
      });

      expect(myFurbysLink).toBeInTheDocument();
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

  describe("When it receives a path to /not-found-page and it renders the Not Found page", () => {
    test("Then it should show Not Found image", () => {
      const expectedAltText = "Error 404: page not found";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/not-found-page"]}>
          <App />
        </MemoryRouter>,
      );
      const pageNotFoundImage = screen.getByAltText(expectedAltText);

      expect(pageNotFoundImage).toBeInTheDocument();
    });
  });

  describe("When it receives a path to /create and it renders the Create page", () => {
    test("Then it should show the title 'Add a new Furby' into a heading", () => {
      const expectedTitle = "Add a new Furby";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/create"]}>
          <App />
        </MemoryRouter>,
      );
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should render a form with a label 'Name:'", () => {
      const expectedLabelText = "Name:";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/create"]}>
          <App />
        </MemoryRouter>,
      );

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should render a button to submit the form with the text 'Create'", () => {
      const expectedButtonText = "Create";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/create"]}>
          <App />
        </MemoryRouter>,
      );

      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When it receives a path to /my-furbys/:furbyId and it renders a Detail page", () => {
    test("Then it should show the title 'My Furby's details' into a heading", () => {
      const expectedTitle = "My Furby's details";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/my-furbys/6564a27d66ed505ce77a67d4"]}>
          <App />
        </MemoryRouter>,
      );
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
