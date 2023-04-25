import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tenant } from "./tenant.models";

// State
interface TenantState {
  currentTenant?: Tenant;
}

const initialState: TenantState = {
  currentTenant: undefined,
};

// Reducers
export const tenantSlice = createSlice({
  name: "tenant",
  initialState: initialState,
  reducers: {
    setTenant: (state: TenantState, action: PayloadAction<Tenant>) => {
      state.currentTenant = action.payload;
    },
  },
});
