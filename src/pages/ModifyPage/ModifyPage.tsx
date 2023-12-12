import { useNavigate } from "react-router-dom";
import FurbyForm from "../../components/FurbyForm/FurbyForm";
import useFurbysApi from "../../hooks/useFurbysApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import PageStyled from "../PageStyled";
import { FurbyWithoutId } from "../../store/features/furbys/types";
import { modifyCurrentFurbyActionCreator } from "../../store/features/furbys/furbysSlice";

const ModifyPage = (): React.ReactElement => {
  const { selectedFurby } = useAppSelector((state) => state.furbysState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { modifyFurby } = useFurbysApi();

  const updateFurby = async (furby: FurbyWithoutId) => {
    const updatedFurby = await modifyFurby(furby, selectedFurby._id);

    dispatch(modifyCurrentFurbyActionCreator(updatedFurby!));

    navigate("/my-furbys");
  };

  return (
    <PageStyled>
      <h2 className="page-title">Modify your Furby</h2>
      <FurbyForm
        submitAction={updateFurby}
        selectedFurby={selectedFurby}
        buttonText="Modify"
      />
    </PageStyled>
  );
};

export default ModifyPage;
