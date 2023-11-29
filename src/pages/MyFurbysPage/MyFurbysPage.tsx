import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import MyFurbyPageStyled from "./MyFurbysPageStyled";
import { loadFurbysActionCreator } from "../../store/features/furbys/furbysSlice";
import furbysApiMock from "../../mocks/furbysApiMock";
import FurbysList from "../../components/FurbysList/FurbysList";

const MyFurbysPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFurbysActionCreator(furbysApiMock));
  }, [dispatch]);

  return (
    <MyFurbyPageStyled>
      <h2 className="page-title">My Furby collection</h2>
      <FurbysList />
    </MyFurbyPageStyled>
  );
};

export default MyFurbysPage;
