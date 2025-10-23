<template>
  <div class="artikel-detail" v-if="artikel">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/3.png" alt="Artikel" class="hero-image" />
      <div class="hero-overlay">
        <h1>Detail Artikel</h1>
      </div>
    </section>

    <!-- Konten Artikel -->
    <div class="container">
      <div class="header">
        <h1>{{ artikel.judul }}</h1>
        <p class="date">{{ formatDate(artikel.created_at) }}</p>
      </div>

      <img
        v-if="artikel.cover"
        :src="`http://localhost:8000/storage/${artikel.cover}`"
        alt="Gambar Artikel"
        class="cover"
      />

      <!-- Isi artikel -->
      <div class="content" v-html="artikel.isi"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import { useRoute } from "vue-router"

const route = useRoute()
const artikel = ref(null)

const formatDate = (date) =>
  new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

onMounted(async () => {
  try {
    const slug = route.params.slug
    const res = await axios.get(`http://localhost:8000/api/artikel/${slug}`)
    artikel.value = res.data
  } catch (err) {
    console.error("Gagal memuat artikel:", err)
  }
})
</script>

<style scoped>
/* === Hero Section === */
.hero {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%) contrast(1.1);
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-overlay h1 {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

/* === Konten Artikel === */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  background: #fff;
  border-radius: 8px;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #222;
}

.date {
  color: #777;
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

.cover {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

/* === Isi Artikel === */
.content {
  line-height: 1.8;
  color: #444;
  font-size: 1rem;
  text-align: justify;
}

/* Elemen dalam artikel */
.content p {
  margin-bottom: 1rem;
}

.content strong {
  font-weight: bold;
  color: #000;
}

.content em {
  font-style: italic;
}

.content u {
  text-decoration: underline;
}

.content ul,
.content ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.content li {
  margin-bottom: 0.4rem;
}

.content a {
  color: #0d6efd;
  text-decoration: underline;
}

.content a:hover {
  color: #c89c36;
}

/* === Gambar di dalam isi artikel === */
.content :deep(img) {
  display: block !important;
  margin: 0 auto 1rem 0 !important; 
  width: 200px !important;         
  height: auto !important;
  border-radius: 10px !important;
  object-fit: cover !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

/* Biar teks mulai di bawah gambar, tidak di samping */
.content p {
  clear: both;
  text-align: justify;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1rem;
}

/* Responsif untuk layar kecil */
@media (max-width: 768px) {
  .content :deep(img) {
    width: 100% !important;
    max-width: 250px !important;
    margin: 0 auto 1rem auto !important;
  }
}
</style>