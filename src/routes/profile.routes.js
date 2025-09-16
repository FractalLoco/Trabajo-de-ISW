import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getPublicProfile } from "../controllers/profile.controller.js";
import { getPrivateProfile } from "../controllers/profile.controller.js";
import { updatePrivateProfile } from "../controllers/profile.controller.js";
import { deletePrivateProfile } from "../controllers/profile.controller.js";

const router = Router();



router.get("/public", getPublicProfile);


router.get("/private", authMiddleware, getPrivateProfile);


router.patch("/private", authMiddleware, updatePrivateProfile);


router.delete("/private", authMiddleware, deletePrivateProfile);

export default router;
