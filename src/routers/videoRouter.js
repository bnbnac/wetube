import express from "express";
import { edit, remove, see, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); // routig code using params should be bottom
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/remove", remove);

export default videoRouter;
