import axios from "axios";
import { useCallback } from "react";
import { FurbyStructure } from "../store/features/furbys/types";

const useFurbysApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getFurbysApi = useCallback(async () => {
    const { data: furbys } = await axios.get<{ furbys: FurbyStructure[] }>(
      "/furbys",
    );
    return furbys;
  }, []);

  return { getFurbysApi };
};

export default useFurbysApi;
