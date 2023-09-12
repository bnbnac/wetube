import express from "express";
import {
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  remove,
  watch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id([0-9a-f]{24})/remove", remove);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
