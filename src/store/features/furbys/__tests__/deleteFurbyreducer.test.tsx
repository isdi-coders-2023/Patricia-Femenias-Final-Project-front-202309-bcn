import furbysApiMock from "../../../../mocks/furbysApiMock";
import { deleteFurbyActionCreator, furbysReducer } from "../furbysSlice";
import { FurbyStateStructure, FurbyStructure } from "../types";

describe("Given a furbySlice with a deleteFurby minireducer", () => {
  describe("When it receives a list of Furbys and the Peachy's id", () => {
    test("Then it should return the list of Furbys without Peachy", () => {
      const initialState: FurbyStateStructure = {
        furbys: furbysApiMock,
        selectedFurby: {} as FurbyStructure,
      };
      const expectedDeletedFurby = "Peachy";

      const currentFurbysState = furbysReducer(
        initialState,
        deleteFurbyActionCreator("6564a27d66ed505ce77a67d3"),
      );

      currentFurbysState.furbys.forEach((furby) => {
        expect(furby).not.toHaveProperty("name", expectedDeletedFurby);
      });
    });
  });
});
