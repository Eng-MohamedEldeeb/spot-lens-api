import { Router } from "express";
import clientController from "./client.controller";
import validatorMiddleware from "../../../common/middlewares/validator.middleware";
import clientValidator from "./client.validator";
import leadGuard from "../../../common/guards/lead.guard";
import { GuardActivator } from "../../../common/decorators";

const router: Router = Router();

router.post(
  "/create-client/:leadId",
  validatorMiddleware.validate(clientValidator.createClient),
  GuardActivator.applyGuards(leadGuard),
  clientController.createClient,
);

router.delete("/delete-client", clientController.deleteClient);

export default router;
