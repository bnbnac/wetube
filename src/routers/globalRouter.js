import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("home");
const handleJoin = (req, res) => res.send("join");

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;
