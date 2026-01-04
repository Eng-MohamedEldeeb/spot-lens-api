import { Router } from "express";
import leadModule from "./lead/lead.module";

const router: Router = Router();

router.use("/leads", leadModule);

export default router;
