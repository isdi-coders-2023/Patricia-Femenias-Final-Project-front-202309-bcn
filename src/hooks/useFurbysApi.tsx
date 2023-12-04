import axios from "axios";
import { useCallback } from "react";
import { FurbyStructure } from "../store/features/furbys/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useAppDispatch } from "../store/hooks";

const useFurbysApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getFurbysApi = useCallback(async () => {
    dispatch(showLoadingActionCreator());

    const { data: furbys } = await axios.get<{ furbys: FurbyStructure[] }>(
      "/furbys",
    );

    dispatch(hideLoadingActionCreator());

    return furbys;
  }, [dispatch]);

  const deleteFurby = useCallback(
    async (apiUrl: string, id: string): Promise<void> => {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.delete(`${apiUrl}/furbys/${id}`);

      dispatch(hideLoadingActionCreator());

      return data;
    },
    [dispatch],
  );

  return { getFurbysApi, deleteFurby };
};

export default useFurbysApi;
