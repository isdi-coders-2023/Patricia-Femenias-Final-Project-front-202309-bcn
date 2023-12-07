import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadFurbysActionCreator } from "../../store/features/furbys/furbysSlice";
import FurbysList from "../../components/FurbysList/FurbysList";
import useFurbysApi from "../../hooks/useFurbysApi";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";
import { toast } from "react-toastify";
import PageStyled from "../PageStyled";

const MyFurbysPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getFurbysApi } = useFurbysApi();

  useEffect(() => {
    (async () => {
      try {
        const furbys = await getFurbysApi();

        dispatch(loadFurbysActionCreator(furbys.furbys));
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We cant found Furbys!", {
          className: "toast toast--error",
        });
      }
    })();
  }, [dispatch, getFurbysApi]);

  return (
    <PageStyled>
      <h2 className="page-title">My Furby collection</h2>
      <FurbysList />
    </PageStyled>
  );
};

export default MyFurbysPage;
