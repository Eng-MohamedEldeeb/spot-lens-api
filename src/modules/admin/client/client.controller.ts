import { Request, Response } from "express";
import responseHandler from "../../../common/handlers/response.handler";
import { ICreateClient } from "./client.dto";
import clientService from "./client.service";
import { AsyncHandler } from "../../../common/decorators";

class ClientController {
  private readonly clientService = clientService;
  public readonly createClient = AsyncHandler.handle(
    async (req: Request<Pick<ICreateClient, "leadId">>, res: Response) => {
      const { leadId } = req.params;

      const createClient: Omit<ICreateClient, "leadId"> = req.body;

      return responseHandler.success(res, {
        status: 201,
        msg: "Clients has been saved Successfully",
        data: await this.clientService.createClient({
          leadId: leadId,
          ...createClient,
        }),
      });
    },
  );

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
