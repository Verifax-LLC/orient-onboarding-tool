import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tenant } from "./tenant-details.models";

// State
interface TenantState {
  tenant: Tenant;
}

const initialState: TenantState = {
  tenant: {} as Tenant,
};

// Reducers
export const tenantDetailsSlice = createSlice({
  name: "tenant",
  initialState: initialState,
  reducers: {
    setTenant: (state: TenantState, action: PayloadAction<Tenant>) => {
      state.tenant = action.payload;
    },
  },
});
