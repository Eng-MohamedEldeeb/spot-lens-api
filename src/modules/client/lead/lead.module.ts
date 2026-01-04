import { Router } from "express";
import leadValidator from "./lead.validator";
import leadController from "./lead.controller";
import validatorMiddleware from "../../../common/middlewares/validator.middleware";

const router: Router = Router();

router.post(
  "/request-lead",
  validatorMiddleware.validate(leadValidator.requestLead),
  leadController.requestLead,
);

export default router;
