import { Router } from "express";
import * as controller from "../controllers/videos.controller.js"
import { asyncWrapp } from "../utilities/asyncWrapp.js";

const youtube_videos_router = Router();

youtube_videos_router.get("/",asyncWrapp(controller.getAll));

youtube_videos_router.get("/:id",asyncWrapp(controller.getOne));

youtube_videos_router.post("/",asyncWrapp(controller.addone));

youtube_videos_router.put("/:id",asyncWrapp(controller.updateOne));

youtube_videos_router.delete("/:id",asyncWrapp(controller.deleteOne));








export default youtube_videos_router ;