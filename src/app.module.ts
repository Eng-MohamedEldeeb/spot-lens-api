import { Express, json } from "express";
import { DataBaseService } from "./db/db.service";

import { clientModule, dashboardModule } from "./modules";

import applyCors from "./utils/security/cors";
import responseHandler from "./common/handlers/response.handler";

export const bootstrap = async (app: Express) => {
  await DataBaseService.connect();

  app.use(json());
  app.use(applyCors);

  app.use("/api/v1/clients", clientModule);
  app.use("/api/v1/dashboard", dashboardModule);

  app.use(/(.*)/, responseHandler.unknownUrl);

  app.use(responseHandler.globalError);
};
