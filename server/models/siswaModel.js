import mongoose from "mongoose";

const siswaSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    umur: {
      type: Number,
      required: true,
    },
    kelas: {
      type: String,
      enum: ["X", "XI", "XII"],
      required: true,
    },
    jurusan: {
      type: String,
      enum: ["IPA", "IPS"],
      required: true,
    },
    nilai: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
  },
  {
    collection: "siswa", // 🔑 PENTING: pakai collection yang sama
    timestamps: true,
  }
);

const siswa = mongoose.model("Siswa", siswaSchema);
export default siswa;
