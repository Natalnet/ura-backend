import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ Serve: "ON" });
});

app.listen(4444);
