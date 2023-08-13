import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const path = req.path;
  if (path === "/protected") {
    return res.send("<h1>not allowed</h1>");
  }
  next();
};

const handleHome = (req, res) => {
  return res.send("hello " + req.headers["user-agent"]);
};

const handleProtected = (req, res) => {
  return res.send("private area");
};

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
