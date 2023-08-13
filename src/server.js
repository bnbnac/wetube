import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
// const logger = morgan("combine"); // more information
// const logger = morgan(${OTHER_OPTIONS});

const home = (req, res) => {
  return res.send("hello " + req.headers["user-agent"]);
};
const login = (req, res) => {
  return res.send("login");
};

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
app.use(logger);
app.get("/", home);
app.get("/login", login);
