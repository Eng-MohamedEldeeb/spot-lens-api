import { Request, Response } from "express";
import leadService, { LeadService } from "./lead.service";
import { IRequestLead } from "./lead.dto";
import { AsyncHandler } from "../../../common/decorators/async.handler.decorator";
import responseHandler from "../../../common/handlers/response.handler";

class LeadController {
  private readonly leadService: LeadService = leadService;

  public readonly requestLead = AsyncHandler.handle(
    async (req: Request, res: Response) => {
      const bookDto: IRequestLead = req.body;
      return responseHandler.success(res, {
        status: 201,
        msg: "Your booking has been received successfully\
              Our team will review the details and contact you shortly to confirm the session and next steps.\
              Thank you for choosing us.",
        data: await this.leadService.requestLead(bookDto),
      });
    },
  );
}

export default new LeadController();
