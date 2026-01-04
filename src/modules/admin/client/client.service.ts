import { clientRepository } from "../../../db/repositories";
import { ICreateClient } from "./client.dto";

export class ClientService {
  private readonly clientRepository = clientRepository;
  public readonly createClient = async (createClientDto: ICreateClient) => {
    console.log({ createClientDto });
  };
  public readonly deleteClient = async (data: any) => {};
}

export default new ClientService();
