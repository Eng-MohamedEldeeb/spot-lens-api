import { Request, Response } from "express";
import { AsyncHandler } from "../../../common/decorators/async.handler.decorator";
import responseHandler from "../../../common/handlers/response.handler";

class SessionController {
  public readonly requestLead = AsyncHandler.handle(
    async (req: Request, res: Response) => {
      return responseHandler.success(res, {
        status: 200,
        msg: "",
      });
    },
  );
}

export default new SessionController();
