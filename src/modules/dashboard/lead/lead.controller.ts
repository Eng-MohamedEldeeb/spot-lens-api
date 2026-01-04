import { Response } from "express";
import leadService from "./lead.service";
import responseHandler from "../../../common/handlers/response.handler";
import { AsyncHandler } from "../../../common/decorators";
import { IRequest } from "../../../common/types/IRequest.interface";
import { ICancelLeadRequest, ICreateClient } from "./lead.dto";

class LeadController {
  private readonly leadService = leadService;

  public readonly getAll = AsyncHandler.handle(async (res: Response) => {
    return responseHandler.success(res, {
      status: 200,
      data: await this.leadService.getAll(),
    });
  });

  public readonly convertToClient = AsyncHandler.handle(
    async (req: IRequest<Pick<ICreateClient, "leadId">>, res: Response) => {
      return responseHandler.success(res, {
        status: 201,
        msg: "Client has been saved Successfully",
        data: await this.leadService.convertToClient(
          req.params.leadId,
          req.lead,
        ),
      });
    },
  );

  public readonly cancelLeadRequest = AsyncHandler.handle(
    async (req: IRequest<ICancelLeadRequest>, res: Response) => {
      return responseHandler.success(res, {
        status: 201,
        msg: "Lead Request has been canceled Successfully",
        data: await this.leadService.cancelLeadRequest(req.params.leadId),
      });
    },
  );
}

export default new LeadController();
