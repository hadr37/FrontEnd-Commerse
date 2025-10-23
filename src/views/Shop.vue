<template>
  <div class="shop-page">
    <!-- HERO SECTION -->
    <section class="hero">
      <img src="/pabrik.png" alt="Shop Banner" class="hero-image" />
      <div class="hero-overlay">
        <h1>SHOP</h1>
      </div>
    </section>

    <!-- KATEGORI LINK -->
    <div class="category-links">
      <span
        class="category-link"
        :class="{ active: selectedCategory === '' }"
        @click="selectedCategory = ''"
      >
        Semua
      </span>
      <span
        v-for="kategori in categories"
        :key="kategori.id"
        class="category-link"
        :class="{ active: selectedCategory === kategori.id }"
        @click="selectedCategory = kategori.id"
      >
        {{ kategori.name }}
      </span>
    </div>

    <!-- SORT & SEARCH -->
    <div class="sort-search-bar">
      <div class="sort">
        <label>Urutkan:</label>
        <select v-model="sortOption" class="form-select">
          <option value="default">Default</option>
          <option value="harga_asc">Harga Termurah</option>
          <option value="harga_desc">Harga Termahal</option>
        </select>
      </div>

      <div class="search">
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
        <div class="badge">
          {{ barang.kategori?.name || "Tanpa Kategori" }}
        </div>

        <div class="image-box">
          <img :src="getImage(barang.gambar)" alt="gambar produk" />
        </div>

        <div class="card-body">
          <h4 class="product-title">{{ barang.nama_barang }}</h4>

          <!-- Deskripsi dengan HTML -->
          <p
            class="desc"
            v-html="barang.deskripsi ? truncateHTML(barang.deskripsi, 120) : 'Tidak ada deskripsi'"
          ></p>

          <p class="stok">Stok: {{ barang.stok }}</p>
        </div>

        <div class="card-footer">
          <div class="price">
            Rp {{ barang.harga.toLocaleString("id-ID") }}
          </div>
          <div class="actions">
            <button class="btn-detail" @click="$router.push(`/produk/${barang.id}`)">
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </div>

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

// Ambil data produk dan kategori
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

  if (selectedCategory.value) {
    data = data.filter(
      (p) => p.kategori_id === parseInt(selectedCategory.value)
    );
  }

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

// Sorting
const sortedProducts = computed(() => {
  let data = [...filteredProducts.value];
  if (sortOption.value === "harga_asc") data.sort((a, b) => a.harga - b.harga);
  else if (sortOption.value === "harga_desc") data.sort((a, b) => b.harga - a.harga);
  return data;
});

// Ambil gambar
const getImage = (path) => {
  if (!path) return "https://via.placeholder.com/300x200?text=No+Image";
  if (path.startsWith("http")) return path;
  return `http://localhost:8000/storage/${path}`;
};

// Fungsi aman untuk potong deskripsi HTML
const truncateHTML = (html, length) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";
  return text.length > length ? text.slice(0, length) + "..." : text;
};

onMounted(getData);
</script>

<style scoped>
.shop-page {
  padding: 0;
  background: #f9fafb;
  min-height: 100vh;
}

/* HERO SECTION */
.hero {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-overlay h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
}

/* CATEGORY LINKS */
.category-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 25px auto 15px;
}

.category-link {
  cursor: pointer;
  color: #444;
  font-weight: 500;
  transition: color 0.2s ease;
  font-size: 1rem;
}

.category-link:hover {
  color: #28a745;
}

.category-link.active {
  color: #28a745;
  font-weight: 600;
  text-decoration: underline;
}

/* SORT & SEARCH */
.sort-search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 60px 30px;
  flex-wrap: wrap;
  gap: 10px;
}

.sort label {
  font-weight: 600;
  margin-right: 10px;
  color: #333;
}

.form-select,
.form-input {
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* PRODUCT GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;
  padding: 0 60px 60px;
}

/* PRODUCT CARD */
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

/* BADGE */
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

/* IMAGE */
.image-box {
  background: #fff;
  height: 250px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid #eee;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: transform 0.3s ease;
  border-radius: 4px;
}

.product-card:hover .image-box img {
  transform: scale(1.05); 
}

/* BODY */
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
  line-height: 1.4;
}

.stok {
  color: #888;
  font-size: 0.85rem;
  margin-top: 5px;
}

/* FOOTER */
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

.no-data {
  text-align: center;
  color: #777;
  margin-top: 40px;
}
</style>
