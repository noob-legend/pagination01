import express from "express";
import siswaController from "../controllers/siswaController.js";

const router = express.Router();

router.get("/siswa", siswaController);

export default router;
