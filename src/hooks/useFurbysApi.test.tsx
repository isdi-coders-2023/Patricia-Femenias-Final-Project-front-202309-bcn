import { renderHook } from "@testing-library/react";
import furbysApiMock from "../mocks/furbysApiMock";
import useFurbysApi from "./useFurbysApi";
import { providerWrapper } from "../testsUtils/wrappers";

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
});
