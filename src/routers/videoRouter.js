import express from "express";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("watch video");
const handleEdit = (req, res) => res.send("edit video");

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);

export default videoRouter;
