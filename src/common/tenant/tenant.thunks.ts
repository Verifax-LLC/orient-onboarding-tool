import { AppDispatch, AppThunk } from "../store/store";
import { Tenant } from "./tenant.models";
import { tenantSlice } from "./tenant.slice";

export const setTenant =
  (tenantId: number): AppThunk =>
  async (dispatch: AppDispatch) => {
    const tenant: Tenant = {
      id: tenantId,
    };
    dispatch(tenantSlice.actions.setTenant(tenant));
  };
