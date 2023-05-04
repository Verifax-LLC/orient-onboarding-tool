import { NetworkError } from "../models/error.models";
import { AppDispatch, AppThunk } from "../store/store";
import { globalSlice } from "./global.slice";

export const setNetworkError =
  (isNetworkError: boolean, error?: Error): AppThunk =>
  async (dispatch: AppDispatch) => {
    if (isNetworkError && error) {
      throw new NetworkError({
        name: "NETWORK_ERROR",
        message: "Network error",
        cause: error,
      });
    }
    dispatch(
      globalSlice.actions.setNetworkError({
        networkError: isNetworkError,
        networkErrorMessage: error?.message,
      })
    );
  };
