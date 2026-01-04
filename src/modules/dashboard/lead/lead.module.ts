import { Router } from "express";
import leadController from "./lead.controller";
import validatorMiddleware from "../../../common/middlewares/validator.middleware";
import { GuardActivator } from "../../../common/decorators";
import { existedLeadGuard } from "../../../common/guards/lead";
import leadValidator from "./lead.validator";

const router: Router = Router();

router.get("/all", leadController.getAll);

router.post(
  "/:leadId/convert-to-client",
  validatorMiddleware.validate(leadValidator.convertToClient),
  GuardActivator.applyGuards(existedLeadGuard),
  leadController.convertToClient,
);

router.patch(
  "/:leadId/cancel-request",
  validatorMiddleware.validate(leadValidator.convertToClient),
  GuardActivator.applyGuards(existedLeadGuard),
  leadController.cancelLeadRequest,
);

export default router;
