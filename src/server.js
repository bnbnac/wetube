import express from "express";

const PORT = 4000;
const app = express();

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);

const globalMiddleware = (req, res, next) => {
  console.log("hello from global");
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("hello from second");
  next();
};

const finalController = (req, res) => {
  return res.send("hello " + req.headers["user-agent"]);
};

app.get("/former", finalController);
app.use(globalMiddleware); // global middleware. note the position
app.get("/", globalMiddleware, secondMiddleware, finalController);
app.get("/later", finalController);
