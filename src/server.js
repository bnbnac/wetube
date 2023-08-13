import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleHome = (req, res) => res.send("home");
globalRouter.get("/", handleHome);

const handleEditUser = (req, res) => res.send("edit user");
userRouter.get("/edit", handleEditUser);

const handleWatchVideo = (req, res) => res.send("watch video");
videoRouter.get("/watch", handleWatchVideo);

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
