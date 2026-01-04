import { Router } from "express";
import leadModule from "./lead/lead.module";

const router: Router = Router();

router.use("/lead", leadModule);

export default router;
