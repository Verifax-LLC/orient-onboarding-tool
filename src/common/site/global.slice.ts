import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State
interface GlobalState {
  networkError: boolean;
}

const initialState: GlobalState = {
  networkError: false,
};

// Reducers
export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setNetworkError: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.networkError = action.payload;
    },
  },
});
