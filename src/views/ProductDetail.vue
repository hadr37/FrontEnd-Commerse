<template>
  <div v-if="product" class="product-detail">
    <div class="content">
      <!-- Gambar Produk -->
      <div class="image-section">
        <img :src="getImage(product.gambar)" alt="Gambar Produk" />
      </div>

      <!-- Detail Produk -->
      <div class="info-section">
        <p class="category">
          Kategori:
          <span>{{ product.kategori?.name || "Tanpa Kategori" }}</span>
        </p>

        <h2 class="title">{{ product.nama_barang }}</h2>

        <ul class="detail-list">
          <li><strong>Merek:</strong> Dua Naga Kosmetindo</li>
          <li><strong>Tekstur:</strong> {{ product.tekstur || "Krim ringan, tidak lengket" }}</li>
          <li><strong>Tipe kulit:</strong> {{ product.tipe_kulit || "Semua jenis kulit" }}</li>
          <li><strong>Digunakan untuk:</strong> {{ product.kegunaan || "Wajah dan tubuh" }}</li>
          <li><strong>Bahan utama:</strong> {{ product.bahan_utama || "-" }}</li>
        </ul>

        <div class="desc-section">
          <h4>Manfaat:</h4>
          <p>{{ product.deskripsi || "Deskripsi belum tersedia." }}</p>
        </div>

        <button class="btn-offer">Dapatkan Penawaran</button>
      </div>
    </div>
  </div>

  <div v-else class="loading">Memuat detail produk...</div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const product = ref(null)

const getImage = (path) => {
  if (!path) return "https://via.placeholder.com/500x400?text=No+Image"
  if (path.startsWith("http")) return path
  return `http://localhost:8000/storage/${path}`
}

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/barang/${route.params.id}`)
    product.value = res.data
  } catch (error) {
    console.error("Gagal mengambil detail produk:", error)
  }
})
</script>

<style scoped>
.product-detail {
  padding: 50px 80px;
  background: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  gap: 40px;
}

/* Gambar */
.image-section {
  flex: 1;
  min-width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section img {
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Info */
.info-section {
  flex: 1;
  min-width: 420px;
}

.category {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.category span {
  color: #28a745;
  font-weight: 500;
}

.title {
  font-size: 26px;
  font-weight: 700;
  color: #222;
  margin-bottom: 15px;
}

.detail-list {
  list-style: none;
  padding: 0;
  margin: 0 0 15px;
  line-height: 1.8;
  color: #444;
}

.desc-section {
  margin-top: 20px;
}

.desc-section h4 {
  margin-bottom: 8px;
  color: #222;
}

.btn-offer {
  background: #1e1e1e;
  color: #fff;
  padding: 12px 25px;
  border-radius: 8px;
  border: none;
  margin-top: 25px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
}

.btn-offer:hover {
  background: #28a745;
}

.loading {
  text-align: center;
  padding: 100px;
  font-size: 18px;
  color: #555;
}
</style>
