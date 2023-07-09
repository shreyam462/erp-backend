import express from "express";
import accreditationController from "#controller/accreditation";

const router = express.Router();
router.post("/add", accreditationController.addAccreditation);
router.delete("/delete/:accredationId", accreditationController.deleteAccreditation);
export default router;