import furbysApiMock from "../../../../mocks/furbysApiMock";
import modifiedFurbyList from "../../../../mocks/modifiedFurbyList";
import { furbysReducer, modifyCurrentFurbyActionCreator } from "../furbysSlice";
import { FurbyStateStructure, FurbyStructure } from "../types";

describe("Given a modifyFurby minireducer", () => {
  describe("When receives a Furby list and the Furby Gizmo", () => {
    test("Then it should return the list with Gizmo modified", () => {
      const modifiedFurby = { ...furbysApiMock[0], name: "Paco" };

      const initialState: FurbyStateStructure = {
        furbys: furbysApiMock,
        selectedFurby: {} as FurbyStructure,
        currentFurby: {} as FurbyStructure,
      };

      const currentFurbysState = furbysReducer(
        initialState,
        modifyCurrentFurbyActionCreator(modifiedFurby),
      );

      expect(currentFurbysState.furbys).toStrictEqual(modifiedFurbyList);
    });
  });
});
