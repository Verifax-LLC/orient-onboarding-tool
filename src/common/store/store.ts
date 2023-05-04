import { AnyAction, applyMiddleware, configureStore } from "@reduxjs/toolkit";

import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { clientDetailsSlice } from "../client-details/client-details.slice";
import { tenantDetailsSlice } from "../tenant-details/tenant-details.slice";

export const rootReducer = {
  clientDetails: clientDetailsSlice.reducer,
  tenantDetails: tenantDetailsSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [applyMiddleware(...[thunkMiddleware])],
});

export type Selector<S> = (state: RootState) => S;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  any,
  AnyAction
>;

export type PreloadedRootState = RootState;
