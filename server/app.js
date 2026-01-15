import connectDB from "./config/connectDB.js";
import env from "dotenv";
import express from "express";
import router from "./routers/routers.js";

env.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api", router);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("applikasi ini berjalan di port :", port);
});
