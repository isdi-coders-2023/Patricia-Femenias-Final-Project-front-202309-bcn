import FurbyForm from "../../components/FurbyForm/FurbyForm";
import useFurbysApi from "../../hooks/useFurbysApi";
import { FurbyStructure } from "../../store/features/furbys/types";
import PageStyled from "../PageStyled";

const CreatePage = (): React.ReactElement => {
  const { addNewFurby } = useFurbysApi();

  const addCurrentFurby = (newFurby: FurbyStructure) => {
    addNewFurby(newFurby);
  };

  return (
    <PageStyled>
      <h2 className="page-title">Add a new Furby</h2>
      <FurbyForm submitAction={addCurrentFurby} />
    </PageStyled>
  );
};

export default CreatePage;
