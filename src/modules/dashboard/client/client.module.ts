import { Router } from "express";
import clientController from "./client.controller";
import { GuardActivator } from "../../../common/decorators";
import { existedClientGuard } from "../../../common/guards/client";

const router: Router = Router();

router.delete(
  "/:clientId",
  GuardActivator.applyGuards(existedClientGuard),
  clientController.deleteClient,
);

export default router;
