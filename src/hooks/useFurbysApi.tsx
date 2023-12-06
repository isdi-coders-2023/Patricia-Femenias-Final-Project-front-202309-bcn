import axios from "axios";
import { useCallback } from "react";
import { FurbyStructure } from "../store/features/furbys/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useAppDispatch } from "../store/hooks";
import { toast } from "react-toastify";

const useFurbysApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getFurbysApi = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const { data: furbys } = await axios.get<{ furbys: FurbyStructure[] }>(
        "/furbys",
      );

      dispatch(hideLoadingActionCreator());

      return furbys;
    } catch (error) {
      dispatch(hideLoadingActionCreator);

      throw new Error((error as Error).message);
    }
  }, [dispatch]);

  const deleteFurby = useCallback(
    async (id: string): Promise<void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/furbys/${id}`);

        toast.success("Great! your Furby has been deleted!", {
          style: { backgroundColor: "#055B2DCC", color: "#fff" },
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, we couldn't delete your Furby!", {
          style: { backgroundColor: "#C52323", color: "#fff" },
        });
      }
    },
    [dispatch],
  );

  return { getFurbysApi, deleteFurby };
};

export default useFurbysApi;
