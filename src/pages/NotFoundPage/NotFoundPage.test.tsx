import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Not Found Page image", () => {
      const expectedAltText = "Error 404: page not found";

      customRender(<NotFoundPage />);
      const pageNotFoundImage = screen.getByAltText(expectedAltText);

      expect(pageNotFoundImage).toBeInTheDocument();
    });
  });
});
