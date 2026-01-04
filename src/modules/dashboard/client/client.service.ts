import { clientRepository } from "../../../db/repositories";

export class ClientService {
  private readonly clientRepository = clientRepository;

  public readonly deleteClient = async (data: any) => {};
}

export default new ClientService();
