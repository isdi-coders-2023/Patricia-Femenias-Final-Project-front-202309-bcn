import newFurbysList from "../../../../mocks/newFurbysList";
import { furbysReducer, loadSelectedFurbyActionCreator } from "../furbysSlice";
import { FurbyStateStructure, FurbyStructure } from "../types";

describe("Given a furbySlice with a loadSelectedFurby minireducer", () => {
  describe("When it receives a Furby list and the Furby Gizmo ", () => {
    test("Then it should return the list of Furbys with Gizmo selected", () => {
      const initialState: FurbyStateStructure = {
        furbys: newFurbysList,
        selectedFurby: {} as FurbyStructure,
        currentFurby: {} as FurbyStructure,
      };
      const selectedFurby: FurbyStructure = newFurbysList[1];

      const currentFurbyState = furbysReducer(
        initialState,
        loadSelectedFurbyActionCreator(selectedFurby),
      );

      expect(currentFurbyState.selectedFurby).toStrictEqual(selectedFurby);
    });
  });
});
