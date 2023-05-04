import apiClient from "../site/axios-instance";
import { setNetworkError } from "../site/global.thunks";
import { AppDispatch, AppThunk } from "../store/store";
import { Tenant } from "./tenant-details.models";
import { TenantService } from "./tenant-details.service";
import { tenantDetailsSlice } from "./tenant-details.slice";

const tenantService = new TenantService(apiClient);

export const setTenant =
  (link: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      await tenantService.fetchTenant(link).then((tenant: Tenant) => {
        dispatch(tenantDetailsSlice.actions.setTenant(tenant));
      });
    } catch (error) {
      dispatch(setNetworkError(true, error as Error));
    }
  };
