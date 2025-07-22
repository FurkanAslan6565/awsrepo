const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// CORS ve JSON parser middleware'leri
app.use(cors());        // Tüm origin'lere izin verir
app.use(express.json()); // JSON gövdesi işlemesi için

// MongoDB bağlantısı
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/mydb";

mongoose.connect(mongoURL)
  .then(() => console.log("✅ MongoDB bağlantısı başarılı"))
  .catch(err => console.error("❌ MongoDB bağlantı hatası:", err));

// Test endpointi
app.get('/api/hello', (req, res) => {
  res.json({ message: "Backend API çalışıyor" });
});

// Ana sayfa endpointi
app.get('/', (req, res) => {
  res.send('🌐 Backend anasayfası!');
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`🚀 Backend ${port} portunda çalışıyor.`);
});
