import {Router} from 'express';
import * as controller from '../controllers/likes.controller.js';
import { asyncWrapp } from '../utilities/asyncWrapp.js';
asyncWrapp
const router = Router()


router.put("/:id",asyncWrapp(controller.likeToArticle))


export default router;