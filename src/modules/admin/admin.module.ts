import { Router } from "express";

import clientModule from "./client/client.module";
import sessionModule from "./session/session.module";

const router: Router = Router();

router.use("/client", clientModule);

router.use("/session", sessionModule);

export default router;
