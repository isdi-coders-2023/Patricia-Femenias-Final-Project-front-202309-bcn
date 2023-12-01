import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import MyFurbyPageStyled from "./MyFurbysPageStyled";
import { loadFurbysActionCreator } from "../../store/features/furbys/furbysSlice";
import FurbysList from "../../components/FurbysList/FurbysList";
import useFurbysApi from "../../hooks/useFurbysApi";

const MyFurbysPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getFurbysApi } = useFurbysApi();

  useEffect(() => {
    (async () => {
      const furbys = await getFurbysApi();

      dispatch(loadFurbysActionCreator(furbys.furbys));
    })();
  }, [dispatch, getFurbysApi]);

  return (
    <MyFurbyPageStyled>
      <h2 className="page-title">My Furby collection</h2>
      <FurbysList />
    </MyFurbyPageStyled>
  );
};

export default MyFurbysPage;
