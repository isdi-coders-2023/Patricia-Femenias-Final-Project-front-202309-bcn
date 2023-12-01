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

  return { getFurbysApi };
};

export default useFurbysApi;
