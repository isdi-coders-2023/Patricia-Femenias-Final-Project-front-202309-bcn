import FurbyForm from "../../components/FurbyForm/FurbyForm";
import PageStyled from "../PageStyled";

const CreatePage = (): React.ReactElement => {
  return (
    <PageStyled>
      <h2 className="page-title">Add a new Furby</h2>
      <FurbyForm />
    </PageStyled>
  );
};

export default CreatePage;
