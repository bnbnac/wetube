import express from "express";

const PORT = 4000;
const app = express();

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  return res.send("hello " + req.headers["user-agent"]);
});
