import { Router } from 'express';
import * as controller from '../controllers/articles.controller.js';
const router = Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.addOne);
router.put("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);
export default router;