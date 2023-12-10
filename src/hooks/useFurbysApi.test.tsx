import { renderHook, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import furbysApiMock from "../mocks/furbysApiMock";
import useFurbysApi from "./useFurbysApi";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../testsUtils/wrappers";
import newFurbysList from "../mocks/newFurbysList";
import { errorHandlers } from "../mocks/errorHandlers";
import server from "../mocks/node";
import App from "../components/App/App";

describe("Given a useFurbysApi custom hook", () => {
  describe("When it gets the information of two Furbys", () => {
    test("Then it should show the information of these two Furbys", async () => {
      const expectedFurbys = furbysApiMock;

      const {
        result: {
          current: { getFurbysApi },
        },
      } = renderHook(() => useFurbysApi(), { wrapper: providerWrapper });

      const currentFurbys = await getFurbysApi();

      expect(currentFurbys).toStrictEqual(expectedFurbys);
    });
  });

  describe("When it calls its deleFurby method with an URL and the Peachys id", () => {
    test("Then it should delete the Peachys Furby from the API", async () => {
      const expectedFurbyId = furbysApiMock[0]._id;
      const expectedEmptyObject = {};

      const {
        result: {
          current: { deleteFurby },
        },
      } = renderHook(() => useFurbysApi(), { wrapper: providerWrapper });

      const response = await deleteFurby(expectedFurbyId);

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });

  describe("When it calls its addNewFurby method with the new Furby Tiger", () => {
    const newFurby = newFurbysList[2];

    test("Then it should return the Tiger Furby from the API", async () => {
      const {
        result: {
          current: { addNewFurby },
        },
      } = renderHook(() => useFurbysApi(), { wrapper: providerWrapper });

      const response = await addNewFurby(newFurby);

      expect(response).toStrictEqual(newFurby);
    });
  });

  describe("When it try to call its addNewFurby method with the new Furby Tiger but an error occurs", () => {
    test("Then it should show the error message 'Sorry! We couldn't add your Furby'", async () => {
      server.use(...errorHandlers);

      const expectedErrorMessage = "Sorry! We couldn't add your Furby";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/create"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addNewFurby },
        },
      } = renderHook(() => useFurbysApi(), { wrapper: providerWrapper });

      await addNewFurby(newFurbysList[2]);

      const errorMessage = await screen.findByText(expectedErrorMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("When it calls its loadSelectedFurby method with the Furby Gizmo id", () => {
    test("Then it should return the Furby Gizmo", async () => {
      const expectedFurbyId = newFurbysList[1]._id;

      const {
        result: {
          current: { loadSelectedFurby },
        },
      } = renderHook(() => useFurbysApi(), { wrapper: providerWrapper });

      const selectedFurby = await loadSelectedFurby(expectedFurbyId);

      expect(selectedFurby).toStrictEqual(newFurbysList[1]);
    });
  });

  describe("When it try to call its loadSelectedFurby method but an error occurs", () => {
    test("Then it should show the error message 'Sorry! We couldn't find your Furby'", async () => {
      server.use(...errorHandlers);

      const expectedFurbyId = newFurbysList[1]._id;
      const expectedErrorMessage = "Sorry! We couldn't find your Furby";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/furbys/6564a27d66ed505ce77a67d4"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { loadSelectedFurby },
        },
      } = renderHook(() => useFurbysApi(), { wrapper: providerWrapper });

      await loadSelectedFurby(expectedFurbyId);

      const errorMessage = await screen.findByText(expectedErrorMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
