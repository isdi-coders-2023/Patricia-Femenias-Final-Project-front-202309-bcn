import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { FurbyStructure, FurbyWithoutId } from "../store/features/furbys/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { useAppDispatch } from "../store/hooks";

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

  const loadSelectedFurby = useCallback(
    async (id: string): Promise<FurbyStructure | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { furby },
        } = await axios.get<{ furby: FurbyStructure }>(`/furbys/${id}`);

        dispatch(hideLoadingActionCreator());

        return furby;
      } catch {
        dispatch(hideLoadingActionCreator());
        toast.error("Sorry! We couldn't find your Furby", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch],
  );

  const modifyFurby = useCallback(
    async (modifiedFurby: FurbyWithoutId, id: string) => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { furby },
        } = await axios.patch<{ furby: FurbyStructure }>(
          `/furbys/${id}`,
          modifiedFurby,
        );
        dispatch(hideLoadingActionCreator());

        toast.success("Great! Your Furby has been modified", {
          className: "toast toast--success",
        });
        navigate("/my-furbys");

        return furby;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry! We couldn't modify your Furby", {
          className: "toast toast--error",
        });
      }
    },
    [dispatch, navigate],
  );

  return {
    getFurbysApi,
    deleteFurby,
    addNewFurby,
    loadSelectedFurby,
    modifyFurby,
  };
};

export default useFurbysApi;
