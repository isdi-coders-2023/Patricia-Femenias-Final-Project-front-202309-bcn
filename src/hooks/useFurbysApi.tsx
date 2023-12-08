import axios from "axios";
import { useCallback } from "react";
import { FurbyStructure, FurbyWithoutId } from "../store/features/furbys/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useAppDispatch } from "../store/hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useFurbysApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

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
          className: "toast toast--success",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, we couldn't delete your Furby!", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch],
  );
  const addNewFurby = useCallback(
    async (newFurby: FurbyWithoutId): Promise<FurbyStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { furby },
        } = await axios.post<{ furby: FurbyStructure }>(
          "/furbys/create",
          newFurby,
        );
        dispatch(hideLoadingActionCreator());

        toast.success("Great! Your Furby has been added", {
          className: "toast toast--success",
        });

        navigate("/");

        return furby;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't add your Furby", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch, navigate],
  );

  return { getFurbysApi, deleteFurby, addNewFurby };
};

export default useFurbysApi;
