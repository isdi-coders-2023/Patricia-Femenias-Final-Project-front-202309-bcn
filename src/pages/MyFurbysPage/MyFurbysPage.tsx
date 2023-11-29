import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import MyFurbyPageStyled from "./MyFurbysPageStyled";
import { loadFurbysActionCreator } from "../../store/features/furbys/furbysSlice";
import furbysApiMock from "../../mocks/furbysApiMock";

const MyFurbysPage = (): React.ReactElement => {
  const furbysState = useAppSelector((state) => state.furbysState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFurbysActionCreator(furbysApiMock));
  }, [dispatch]);

  return (
    <MyFurbyPageStyled>
      <h2 className="page-title">My Furby collection</h2>
      {furbysState.furbys.map((furby) => (
        <h3>{furby.name}</h3>
      ))}
    </MyFurbyPageStyled>
  );
};

export default MyFurbysPage;
