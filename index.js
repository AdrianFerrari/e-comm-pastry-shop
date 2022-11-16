import express from "express";
import path from "path";
import * as url from 'url';
import data from "./data.json" assert { type: "json" };
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));
app.use("/images", express.static("images"));

app.get("/api/data", (req, res) => {
  res.json(data)
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening port ${port}`);
