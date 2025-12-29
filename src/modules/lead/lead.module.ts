import { Router } from "express";

const router: Router = Router();

router.get("/all", (req, res, next) => {
  return res.json("done");
});

export default router;
