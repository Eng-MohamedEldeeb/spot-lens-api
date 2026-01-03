import { Request, Response } from "express";
import { AsyncHandler } from "../../common/decorators/async.handler";
import responseHandler from "../../common/handlers/response.handler";
import leadService, { LeadService } from "./lead.service";
import { IBook } from "./lead.dto";

class LeadController {
  private readonly leadService: LeadService = leadService;

  public readonly book = AsyncHandler.handle(
    async (req: Request, res: Response) => {
      const bookDto: IBook = req.body;
      return responseHandler.success(res, {
        status: 201,
        msg: "Your booking has been received successfully\
              Our team will review the details and contact you shortly to confirm the session and next steps.\
              Thank you for choosing us.",
        data: await this.leadService.book(bookDto),
      });
    },
  );
}

export default new LeadController();
