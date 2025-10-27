<template>
  <div class="artikel-page">
    <!-- HERO SECTION -->
    <section class="hero">
      <img src="/3.png" alt="Tentang Kami" class="hero-image" />
      <div class="hero-overlay">
        <h1>ARTIKEL</h1>
      </div>
    </section>

    <!-- GRID ARTIKEL -->
    <section class="artikel-grid">
      <div v-for="a in articles" :key="a.slug" class="artikel-card">
        <img :src="`http://localhost:8000/storage/${a.cover}`" alt="cover artikel" />

        <div class="content">
          <h3>{{ a.judul }}</h3>
          <p>{{ potongIsi(stripHtml(a.isi)) }}</p>
          <router-link :to="`/artikel/${a.slug}`" class="btn">
            Baca Selengkapnya
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const articles = ref([]);

// Ambil semua artikel
onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/artikel");
    articles.value = res.data;
  } catch (error) {
    console.error(error);
    alert("Gagal memuat artikel.");
  }
});

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};


const potongIsi = (isi) => {
  if (!isi) return "Tidak ada deskripsi";
  return isi.length > 100 ? isi.substring(0, 100) + "..." : isi;
};
</script>

<style scoped>
/* === Hero Section === */
.hero {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(55%) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-overlay h1 {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

/* === GRID === */
.artikel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 4rem;
  background: #f9fafb;
}

/* === CARD === */
.artikel-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.artikel-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.artikel-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

/* === KONTEN === */
.content {
  padding: 1rem 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #222;
}

p {
  font-size: 0.9rem;
  color: #555;
  flex-grow: 1;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

/* === TOMBOL === */
.btn {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #218838;
}
</style>
