<template>
  <div class="artikel-detail" v-if="artikel">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/3.png" alt="Artikel" class="hero-image" />
      <div class="hero-overlay">
        <h1>Detail Artikel</h1>
      </div>
    </section>

    <!-- Konten Utama -->
    <div class="content-wrapper">
      <!-- Kolom Kiri: Artikel -->
      <div class="left-content">
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

        <div class="content" v-html="artikel.isi"></div>
      </div>

      <!-- Kolom Kanan: Artikel Terbaru -->
      <div class="right-sidebar">
        <h2>Artikel Terbaru</h2>
        <div v-if="artikelTerbaru.length">
          <div
            class="artikel-item"
            v-for="item in artikelTerbaru"
            :key="item.id"
            @click="bukaArtikel(item.slug)"
          >
            <img
              v-if="item.cover"
              :src="`http://localhost:8000/storage/${item.cover}`"
              alt="cover"
            />
            <div class="info">
              <h3>{{ item.judul }}</h3>
              <p>{{ formatDate(item.created_at) }}</p>
            </div>
          </div>
        </div>
        <p v-else>Tidak ada artikel terbaru.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"
import axios from "axios"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const artikel = ref(null)
const artikelTerbaru = ref([])

const formatDate = (date) =>
  new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

const getArtikel = async () => {
  try {
    const slug = route.params.slug
    const res = await axios.get(`http://localhost:8000/api/artikel/${slug}`)
    artikel.value = res.data
  } catch (err) {
    console.error("Gagal memuat artikel:", err)
  }
}

const getArtikelTerbaru = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/artikel?limit=5")
    artikelTerbaru.value = res.data.data || res.data
  } catch (err) {
    console.error("Gagal memuat artikel terbaru:", err)
  }
}

const bukaArtikel = (slug) => {
  router.push(`/artikel/${slug}`)
}

onMounted(() => {
  getArtikel()
  getArtikelTerbaru()
})

// Jika berpindah artikel, data di-refresh
watch(
  () => route.params.slug,
  () => {
    getArtikel()
  }
)
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
}

/* === Wrapper Dua Kolom === */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 0 2rem 4rem;
}

/* Kolom kiri (artikel utama) */
.left-content {
  flex: 3;
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

.content :deep(img) {
  display: block;
  margin: 1rem auto;
  width: 200px;
  border-radius: 10px;
  object-fit: cover;
}

/* Kolom kanan (sidebar artikel terbaru) */
.right-sidebar {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: fit-content;
}

.right-sidebar h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c89c36;
  padding-bottom: 0.5rem;
}

.artikel-item {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.artikel-item:hover {
  transform: translateY(-3px);
}

.artikel-item img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.artikel-item .info h3 {
  font-size: 0.95rem;
  color: #222;
  margin: 0;
  line-height: 1.3;
}

.artikel-item .info p {
  font-size: 0.8rem;
  color: #777;
}

/* Responsif */
@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
  }

  .right-sidebar {
    width: 100%;
  }
}
</style>
