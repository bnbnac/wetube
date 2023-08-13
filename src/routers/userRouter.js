import express from "express";

const userRouter = express.Router();

const handleEdit = (req, res) => res.send("edit user");
const handleDelete = (req, res) => res.send("delete user");

userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);

export default userRouter;
