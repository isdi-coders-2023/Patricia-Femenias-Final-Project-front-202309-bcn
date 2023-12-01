import { renderHook } from "@testing-library/react";
import furbysApiMock from "../mocks/furbysApiMock";
import useFurbysApi from "./useFurbysApi";
import { providerWrapper } from "../testsUtils/customRender";

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
});
