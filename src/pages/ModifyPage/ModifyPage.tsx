import { useNavigate, useParams } from "react-router-dom";
import FurbyForm from "../../components/FurbyForm/FurbyForm";
import useFurbysApi from "../../hooks/useFurbysApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import PageStyled from "../PageStyled";
import {
  FurbyStructure,
  FurbyWithoutId,
} from "../../store/features/furbys/types";
import {
  loadSelectedFurbyActionCreator,
  modifyCurrentFurbyActionCreator,
} from "../../store/features/furbys/furbysSlice";
import { useEffect } from "react";

const ModifyPage = (): React.ReactElement => {
  const { selectedFurby } = useAppSelector((state) => state.furbysState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { modifyFurby, loadSelectedFurby } = useFurbysApi();
  const { furbyId } = useParams();

  const updateFurby = async (furby: FurbyWithoutId) => {
    const updatedFurby = await modifyFurby(furby, selectedFurby._id);

    dispatch(modifyCurrentFurbyActionCreator(updatedFurby!));

    navigate("/my-furbys");
  };

  useEffect(() => {
    (async () => {
      const furby = await loadSelectedFurby(furbyId as string);

      dispatch(loadSelectedFurbyActionCreator(furby as FurbyStructure));

      return furby;
    })();
  }, [dispatch, loadSelectedFurby, furbyId]);

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
