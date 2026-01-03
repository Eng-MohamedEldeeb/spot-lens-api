import { Express, json } from "express";
import { DataBaseService } from "../db/db.service";

import leadRoute from "./lead/lead.module";

import responseHandler from "../common/handlers/response.handler";

export const bootstrap = async (app: Express) => {
  await DataBaseService.connect();

  app.use(json());

  app.use("/api/v1/lead", leadRoute);

  app.use(/(.*)/, responseHandler.unknownUrl);

  app.use(responseHandler.globalError);
};
