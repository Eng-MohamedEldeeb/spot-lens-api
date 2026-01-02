import { Express, json } from "express";
import { DataBaseService } from "../db/db.service";
import responseHandler from "../common/handlers/response.handler";

export const bootstrap = async (app: Express) => {
  await DataBaseService.connect();

  app.use(json());

  app.use(/(.*)/, responseHandler.unknownUrl);

  app.use(responseHandler.globalError);
};
