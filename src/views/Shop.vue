<template>
  <div class="shop-page">
    <!-- FILTER AREA -->
    <div class="filter-bar">
      <div class="filter-item">
        <label>Kategori</label>
        <select v-model="selectedCategory" class="form-select" @change="filterProducts">
          <option value="">-- Semua Kategori --</option>
          <option
            v-for="kategori in categories"
            :key="kategori.id"
            :value="kategori.id"
          >
            {{ kategori.name }}
          </option>
        </select>
      </div>

      <div class="filter-item">
        <label>Urutkan</label>
        <select v-model="sortOption" class="form-select">
          <option value="default">Default</option>
          <option value="harga_asc">Harga Termurah</option>
          <option value="harga_desc">Harga Termahal</option>
        </select>
      </div>

      <div class="filter-item">
        <label>Pencarian</label>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari produk..."
          class="form-input"
        />
      </div>
    </div>

    <!-- PRODUK GRID -->
    <div class="product-grid">
      <div
        v-for="barang in sortedProducts"
        :key="barang.id"
        class="product-card"
      >
        <!-- Badge Kategori -->
        <div class="badge">
          {{ barang.kategori?.name || "Tanpa Kategori" }}
        </div>

        <!-- Gambar -->
        <div class="image-box">
          <img
            :src="getImage(barang.gambar)"
            alt="gambar produk"
          />
        </div>

        <!-- Body -->
        <div class="card-body">
          <h4 class="product-title">{{ barang.nama_barang }}</h4>
          <p class="desc">
            {{ barang.deskripsi ? truncate(barang.deskripsi, 60) : "Tidak ada deskripsi" }}
          </p>
          <p class="stok">Stok: {{ barang.stok }}</p>
        </div>

        <!-- Footer -->
        <div class="card-footer">
          <div class="price">
            Rp {{ barang.harga.toLocaleString("id-ID") }}
          </div>
          <div class="actions">
            <button class="btn-detail" @click="$router.push(`/produk/${barang.id}`)">
  Lihat Detail
</button>
            <button class="btn-cart">
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Jika kosong -->
    <div v-if="!sortedProducts.length" class="no-data">
      Tidak ada produk ditemukan.
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const categories = ref([]);
const selectedCategory = ref("");
const sortOption = ref("default");
const searchQuery = ref("");

const API_URL = "http://localhost:8000/api/barang";
const CAT_URL = "http://localhost:8000/api/categories";

// Ambil data API
const getData = async () => {
  try {
    const [resProducts, resCategories] = await Promise.all([
      axios.get(API_URL),
      axios.get(CAT_URL),
    ]);
    products.value = resProducts.data;
    categories.value = resCategories.data;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
};

// Filter produk
const filteredProducts = computed(() => {
  let data = [...products.value];

  // Filter kategori
  if (selectedCategory.value) {
    data = data.filter(
      (p) => p.kategori_id === parseInt(selectedCategory.value)
    );
  }

  // Pencarian
  if (searchQuery.value.trim() !== "") {
    const q = searchQuery.value.toLowerCase();
    data = data.filter(
      (p) =>
        p.nama_barang.toLowerCase().includes(q) ||
        p.deskripsi?.toLowerCase().includes(q)
    );
  }

  return data;
});

// Sorting produk
const sortedProducts = computed(() => {
  let data = [...filteredProducts.value];
  if (sortOption.value === "harga_asc") {
    data.sort((a, b) => a.harga - b.harga);
  } else if (sortOption.value === "harga_desc") {
    data.sort((a, b) => b.harga - a.harga);
  }
  return data;
});

// Fungsi bantu
const getImage = (path) => {
  if (!path) return "https://via.placeholder.com/300x200?text=No+Image";
  if (path.startsWith("http")) return path;
  return `http://localhost:8000/storage/${path}`;
};

const truncate = (text, length) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

onMounted(getData);
</script>

<style scoped>
.shop-page {
  padding: 40px 60px;
  background: #f9fafb;
  min-height: 100vh;
}

/* Filter bar */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.filter-item {
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}

.form-select,
.form-input {
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
}

/* Card */
.product-card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

/* Badge */
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #28a745;
  color: white;
  font-size: 0.75rem;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 10;
}

/* Gambar */
.image-box {
  background: #f4f4f4;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-box img {
  max-height: 100%;
  object-fit: contain;
}

/* Body */
.card-body {
  padding: 15px;
  flex: 1;
}

.product-title {
  font-weight: 600;
  color: #222;
  margin-bottom: 5px;
}

.desc {
  color: #666;
  font-size: 0.9rem;
}

.stok {
  color: #888;
  font-size: 0.85rem;
  margin-top: 5px;
}

/* Footer */
.card-footer {
  border-top: 1px solid #eee;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  color: #28a745;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn-detail {
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.3s;
}

.btn-detail:hover {
  background: #1e7e34;
}

.btn-cart {
  background: none;
  border: none;
  color: #28a745;
  font-size: 1.1rem;
  cursor: pointer;
}

.no-data {
  text-align: center;
  color: #777;
  margin-top: 40px;
}
</style>
