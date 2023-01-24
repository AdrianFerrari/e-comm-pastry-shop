import express from "express";
import path from "path";
import cors from "cors"
import * as url from 'url';
import compression from "compression"
import data from "./data.json" assert { type: "json" };
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();


//midleware
app.use(compression())
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.get("/images/:name", (req, res) => {
  const { name } = req.params
  const imagePath = path.join(__dirname, "./images/" + name)
  res.sendFile(imagePath)
});

app.get("/images/low_q/:name", (req, res) => {
  const { name } = req.params
  const imagePath = path.join(__dirname, "./images/low_q/" + name)
  res.sendFile(imagePath)
});

app.get("/api/data", (req, res) => {
  res.json(data)
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});