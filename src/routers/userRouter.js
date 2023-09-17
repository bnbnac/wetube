import express from "express";
import {
  edit,
  finishGithubLogin,
  logout,
  remove,
  see,
  startGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/remove", remove);

export default userRouter;
