import { Request, Response } from "express";
import responseHandler from "../../../common/handlers/response.handler";
import clientService from "./client.service";
import { AsyncHandler } from "../../../common/decorators";
import { IRequest } from "../../../common/types/IRequest.interface";
import { IDeleteClient } from "./client.dto";

class ClientController {
  private readonly clientService = clientService;

  public readonly deleteClient = AsyncHandler.handle(
    async (req: IRequest<IDeleteClient>, res: Response) => {
      await this.clientService.deleteClient(req.params.clientId);
      return responseHandler.success(res, {
        status: 200,
        msg: "Clients has been deleted Successfully",
      });
    },
  );
}

export default new ClientController();
