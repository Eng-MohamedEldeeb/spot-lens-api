import { Express, json } from "express";
import { DataBaseService } from "./db/db.service";

import { adminModule, clientModule, dashboardModule } from "./modules";

import responseHandler from "./common/handlers/response.handler";

export const bootstrap = async (app: Express) => {
  await DataBaseService.connect();

  app.use(json());

  app.use("/api/v1/admin", adminModule);
  app.use("/api/v1/client", clientModule);
  app.use("/api/v1/dashboard", dashboardModule);

  app.use(/(.*)/, responseHandler.unknownUrl);

  app.use(responseHandler.globalError);
};
