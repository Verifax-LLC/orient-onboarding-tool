import { AxiosInstance } from "axios";
import { Tenant, tenantRequest } from "./tenant-details.models";

export class TenantService {
  private readonly _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  public async fetchTenant(link: string): Promise<Tenant> {
    const tenantRequest: tenantRequest = {
      id: link,
    };
    const response = await this._axios.post<Tenant>("/Tenant", tenantRequest);
    return response.data;
  }
}
