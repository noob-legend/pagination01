# Pagination API (Page & Limit)

Project backend sederhana menggunakan **Node.js, Express, dan MongoDB**  
dengan fitur **pagination menggunakan page & limit**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- ES Modules

---

## 📂 Struktur Folder

server/
│── config/
│ └── db.js
│── controllers/
│ └── siswaController.js
│── models/
│ └── Siswa.js
│── routes/
│ └── siswaRoutes.js
│── services/
│ └── paginationService.js
│── .env
│── .gitignore
│── README.md
│── server.js

---

## ⚙️ Environment Variable

Buat file `.env`:

```env
MONGO_URI=mongodb://localhost:27017/pagination1
PORT=5000

▶️ Menjalankan Project
npm install
npm run dev

atau

npm start

🔗 Endpoint Pagination
GET Data Siswa
GET /siswa?page=1&limit=10

Query Parameter
Parameter	Deskripsi
page	Halaman data
limit	Jumlah data per halaman
📦 Contoh Response
{
  "page": 1,
  "limit": 10,
  "data": [
    {
      "_id": "65a1f...",
      "nama": "Siswa 1",
      "umur": 15,
      "kelas": "X",
      "jurusan": "IPA",
      "nilai": 80
    }
  ]
}

🧠 Konsep Pagination

Menggunakan offset pagination

Offset dihitung dari:

skip = (page - 1) * limit

🎯 Tujuan Project

Memahami pagination backend

Melatih pemisahan controller & service

Dasar sebelum lanjut ke cursor pagination

👤 Author

noob legend


---
```
