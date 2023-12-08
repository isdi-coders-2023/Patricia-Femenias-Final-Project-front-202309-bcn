import FurbyForm from "../../components/FurbyForm/FurbyForm";
import useFurbysApi from "../../hooks/useFurbysApi";
import PageStyled from "../PageStyled";

const CreatePage = (): React.ReactElement => {
  const { addNewFurby } = useFurbysApi();

  return (
    <PageStyled>
      <h2 className="page-title">Add a new Furby</h2>
      <FurbyForm submitAction={addNewFurby} />
    </PageStyled>
  );
};

export default CreatePage;
