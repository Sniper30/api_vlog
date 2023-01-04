import { Router } from 'express';
import * as controller from '../controllers/articles.controller.js';
const router = Router();
router.get("/", asyncWrapp(controller.getAll));
router.get("/:id", asyncWrapp(controller.getOne));
router.post("/", asyncWrapp(controller.addOne));
router.put("/:id", asyncWrapp(controller.updateOne));
router.delete("/:id", asyncWrapp(controller.deleteOne));
export default router;