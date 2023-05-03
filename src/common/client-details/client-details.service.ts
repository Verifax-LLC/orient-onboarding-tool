import { AxiosInstance } from "axios";
import { Client, ClientDetails } from "../models/client-details.models";

export class ClientService {
  private readonly _axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this._axios = axios;
  }

  public async createClient(client: Client): Promise<Client> {
    const response = await this._axios.post<Client>("/Client", client);
    return response.data;
  }

  public async createClientDetails(
    client: ClientDetails
  ): Promise<ClientDetails> {
    const response = await this._axios.post<ClientDetails>(
      "/ClientDetails",
      client
    );
    return response.data;
  }
}
