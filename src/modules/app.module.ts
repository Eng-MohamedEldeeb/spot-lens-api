import { Express, json } from "express";
import { DataBaseService } from "../db/db.service";

export const bootstrap = async (app: Express) => {
  await DataBaseService.connect();

  app.use(json());
};
