import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ Serve: "on" });
});

app.listen(4444);
