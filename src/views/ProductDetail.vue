<template>
  <div>
    <!-- Hero Banner -->
    <section class="hero-banner">
      <img src="/banner-tengah.png" alt="Banner" class="hero-image" />
      <div class="overlay"></div>
      <div class="hero-text">
        <h1>Detail Produk</h1>
      </div>
    </section>

    <!-- Konten Produk -->
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

          <button class="btn-offer" @click="showModal = true">Dapatkan Penawaran</button>
        </div>
      </div>

      <!-- Popup Form -->
      <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
        <div class="modal">
          <div class="modal-header">
            <h3>Dapatkan Penawaran Menarik</h3>
            <button class="close-btn" @click="showModal = false">&times;</button>
          </div>

          <form class="modal-form" @submit.prevent="submitForm">
            <input v-model="form.nama" type="text" placeholder="Nama" required />
            <input v-model="form.email" type="email" placeholder="E-mail" required />
            <input v-model="form.telepon" type="text" placeholder="No Telepon / Whatsapp" required />
            <textarea v-model="form.pesan" rows="4" placeholder="Pesan"></textarea>
            <button type="submit" class="submit-btn">Kirim</button>
          </form>
        </div>
      </div>
    </div>

    <div v-else class="loading">Memuat detail produk...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"

const route = useRoute()
const product = ref(null)
const showModal = ref(false)

const form = ref({
  nama: "",
  email: "",
  telepon: "",
  pesan: "",
})

const getImage = (path) => {
  if (!path) return "https://via.placeholder.com/400x300?text=No+Image"
  if (path.startsWith("http")) return path
  return `http://localhost:8000/storage/${path}`
}

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/barang/${route.params.id}`)
    product.value = res.data
    window.scrollTo({ top: 0, behavior: "smooth" })
  } catch (error) {
    console.error("Gagal mengambil detail produk:", error)
  }
})

const submitForm = () => {
  alert(`Terima kasih, ${form.value.nama}! Pesan kamu telah dikirim.`)
  showModal.value = false
  form.value = { nama: "", email: "", telepon: "", pesan: "" }
}
</script>


<style scoped>
.product-page {
  background: #fff;
  min-height: 100vh;
  padding: 0;
}

/* === HERO SECTION === */
.hero-banner {
  position: relative;
  width: 100%;
  height: 45vh;
  overflow: hidden;
  margin-top: -80px; 
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}

.hero-text {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
}

.hero-text h1 {
  font-size: 36px;
  font-weight: 700;
}

/* === DETAIL PRODUK === */
.product-detail {
  padding: 60px 80px 50px;
  background: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: relative;
}


/* DETAIL PRODUK */
.product-detail {
  padding: 70px 80px 50px;
  display: flex;
  justify-content: center;
  background: #fff;
}

.content {
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  gap: 25px;
  align-items: flex-start;
}

.image-section {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section img {
  width: 90%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.info-section {
  flex: 1;
  min-width: 300px;
}

.category {
  font-size: 13px;
  color: #666;
  margin-bottom: 5px;
}

.category span {
  color: #28a745;
  font-weight: 500;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
}

.detail-list {
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
  line-height: 1.6;
  color: #444;
  font-size: 13px;
}

.desc-section {
  margin-top: 15px;
}

.desc-section h4 {
  font-size: 14px;
  margin-bottom: 5px;
}

.desc-section p {
  font-size: 13px;
  line-height: 1.5;
  color: #555;
}

.btn-offer {
  background: #1e1e1e;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  font-size: 13px;
}

.btn-offer:hover {
  background: #28a745;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 360px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.modal-form input,
.modal-form textarea {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 13px;
}

.submit-btn {
  width: 100%;
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.submit-btn:hover {
  background: #c19b2e;
}

.loading {
  text-align: center;
  padding: 100px;
  font-size: 16px;
  color: #555;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .product-detail {
    padding: 40px 20px 30px;
  }

  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-section img {
    width: 80%;
  }

  .info-section {
    margin-top: 15px;
  }

  .hero-overlay h1 {
    font-size: 2rem;
  }
}
</style>
