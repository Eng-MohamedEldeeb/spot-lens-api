import { Request, Response } from "express";
import responseHandler from "../../../common/handlers/response.handler";
import { AsyncHandler } from "../../../common/decorators";

class GalleryController {
  public readonly requestLead = AsyncHandler.handle(
    async (req: Request, res: Response) => {
      return responseHandler.success(res, {
        status: 200,
        msg: "",
      });
    },
  );
}

export default new GalleryController();
