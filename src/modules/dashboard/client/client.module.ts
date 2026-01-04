import { Router } from "express";
import clientController from "./client.controller";

const router: Router = Router();

router.delete("/delete-client", clientController.deleteClient);

export default router;
