import express from "express";
import { paginationService } from "../services/paginationService.js";

let ambilData = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const siswa = await paginationService(page, limit);

  res.json({
    page,
    limit,
    data: siswa,
  });
};

export default ambilData;
