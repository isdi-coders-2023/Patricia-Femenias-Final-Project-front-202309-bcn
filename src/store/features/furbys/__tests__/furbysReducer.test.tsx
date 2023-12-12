import furbysApiMock from "../../../../mocks/furbysApiMock";
import { furbysReducer, loadFurbysActionCreator } from "../furbysSlice";
import { FurbyStateStructure, FurbyStructure } from "../types";

describe("Given a furbysReducer", () => {
  describe("When it receives an empty list of Furbys", () => {
    test("Then it should return a list with the Furbys Peachy and Gizmo", () => {
      const furbysList = furbysApiMock;
      const currentListState: FurbyStateStructure = {
        furbys: [],
        selectedFurby: {} as FurbyStructure,
        currentFurby: {} as FurbyStructure,
      };

      const newListState = furbysReducer(
        currentListState,
        loadFurbysActionCreator(furbysList),
      );

      expect(newListState.furbys).toStrictEqual(furbysList);
    });
  });
});
