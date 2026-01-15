import Siswa from "../models/siswaModel.js";

export const paginationService = (page, limit) => {
  const skip = (page - 1) * limit;

  const siswa = Siswa.find().skip(skip).limit(limit);

  return siswa;
};
