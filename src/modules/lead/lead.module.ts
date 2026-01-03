import { Router } from "express";
import leadValidator from "./lead.validator";
import validatorMiddleware from "../../middlewares/validator.middleware";
import leadController from "./lead.controller";

const router: Router = Router();

router.post(
  "/book",
  validatorMiddleware.validate(leadValidator.book),
  leadController.book,
);

export default router;
