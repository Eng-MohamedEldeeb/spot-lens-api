import { clientRepository } from "../../../db/repositories";

export class ClientService {
  private readonly clientRepository = clientRepository;

  public readonly deleteClient = async (clientId: string) => {
    return await this.clientRepository.findByIdAndDelete({ _id: clientId });
  };
}

export default new ClientService();
