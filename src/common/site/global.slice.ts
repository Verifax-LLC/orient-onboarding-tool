import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State
interface GlobalState {
  networkError: boolean;
  networkErrorMessage?: string;
}

const initialState: GlobalState = {
  networkError: false,
  networkErrorMessage: undefined,
};

// Reducers
export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setNetworkError: (
      state: GlobalState,
      action: PayloadAction<GlobalState>
    ) => {
      state.networkError = action.payload.networkError;
      state.networkErrorMessage = action.payload.networkErrorMessage;
    },
  },
});
