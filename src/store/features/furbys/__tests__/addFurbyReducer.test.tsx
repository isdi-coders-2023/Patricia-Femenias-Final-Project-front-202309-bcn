import furbysApiMock from "../../../../mocks/furbysApiMock";
import newFurbysList from "../../../../mocks/newFurbysList";
import { addNewFurbyActionCreator, furbysReducer } from "../furbysSlice";
import { FurbyStateStructure, FurbyStructure } from "../types";

describe("Given an addFurby minireducer", () => {
  describe("When it receives a list of Furbys and a new Furby without id 'Tiger'", () => {
    test("Then ot should return the list of Furbys with Tiger with id included in the list", () => {
      const initialState: FurbyStateStructure = {
        furbys: furbysApiMock,
        selectedFurby: {} as FurbyStructure,
      };
      const newFurby: FurbyStructure = newFurbysList[2];

      const currentFurbysState = furbysReducer(
        initialState,
        addNewFurbyActionCreator(newFurby),
      );

      expect(currentFurbysState.furbys).toStrictEqual(newFurbysList);
    });
  });
});
