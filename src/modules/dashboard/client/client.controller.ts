import { Request, Response } from "express";
import responseHandler from "../../../common/handlers/response.handler";
import clientService from "./client.service";
import { AsyncHandler } from "../../../common/decorators";

class ClientController {
  private readonly clientService = clientService;

  public readonly deleteClient = AsyncHandler.handle(
    async (req: Request, res: Response) => {
      return responseHandler.success(res, {
        status: 200,
        msg: "Clients has been deleted Successfully",
      });
    },
  );
}

export default new ClientController();
