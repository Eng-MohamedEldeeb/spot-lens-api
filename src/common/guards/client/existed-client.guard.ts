import { clientRepository } from "../../../db/repositories";
import { GuardActivator } from "../../decorators";
import { IRequest } from "../../types/IRequest.interface";

class ExistedClientGuard extends GuardActivator {
  private readonly clientRepository = clientRepository;

  public readonly activate = async (
    req: IRequest<{ clientId: string }>,
  ): Promise<boolean | void> => {
    const client = await this.clientRepository.findById({
      _id: req.params.clientId,
    });

    if (!client)
      throw {
        status: 404,
        success: false,
        msg: "in-valid client id or doesn't exist",
      };

    req.client = client;

    return true;
  };
}

export default new ExistedClientGuard();
