import { Router } from "express";

import leadModule from "./lead/lead.module";
import clientModule from "./client/client.module";
import sessionModule from "./session/session.module";
import galleryModule from "./gallery/gallery.module";
import photoModule from "./photo/photo.module";

const router: Router = Router();

router.use("/leads", leadModule);
router.use("/clients", clientModule);
router.use("/sessions", sessionModule);
router.use("/galleries", galleryModule);
router.use("/photos", photoModule);

export default router;
