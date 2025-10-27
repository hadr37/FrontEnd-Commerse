<template>
  <div class="kontak-page">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/1.png" alt="Kontak" class="hero-image" />
      <div class="hero-overlay">
        <h1>KONTAK</h1>
      </div>
    </section>

    <!-- Form & Kontak -->
    <section class="kontak-section">
      <div class="kontak-grid">
        <!-- Kirim Pesan -->
        <div class="card-form">
          <h2>Kirimkan Pesan</h2>
          <p>Kirimkan pesan kepada kami di bawah dan kami akan menghubungi Anda sesegera mungkin!</p>

          <form @submit.prevent="kirimPesan">
            <input v-model="form.nama" type="text" placeholder="Nama Lengkap" required />
            <input v-model="form.email" type="email" placeholder="Alamat Email" required />
            <input v-model="form.telepon" type="text" placeholder="No Whatsapp" required />
            <textarea v-model="form.pesan" rows="4" placeholder="Pesan Anda..." required></textarea>
            <button type="submit" :disabled="loading">
              {{ loading ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </form>

          <p v-if="successMessage" class="success">{{ successMessage }}</p>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>

        <!-- Hubungi Kami -->
        <div class="hubungi-kami">
          <h2>Hubungi Kami</h2>
          <p>
            Kami akan senang untuk berbicara dengan Anda. Jangan ragu untuk menghubungi kami melalui kontak di bawah ini.
          </p>
          <ul>
            <li>📞 +62 811-2800-181</li>
            <li>📧 marketing@phytomed.co.id</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Lokasi -->
    <section class="lokasi-section">
      <div class="lokasi-grid">
        <div class="kunjungi-kami">
          <h2>Kunjungi Kami</h2>
          <p><strong>Alamat Pabrik:</strong><br />
            📍 Jl. Gawok No. 7, Geneng, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah 57557
          </p>
          <div class="jam-kerja">
            <strong>Jam Kerja:</strong><br />
            <ul>
              <li>🕓 Senin - Jumat, 08:00 - 17:00 WIB</li>
              <li>🕓 Sabtu, 08:00 - 12:00 WIB</li>
            </ul>
          </div>
        </div>

        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.396146580888!2d110.737027!3d-7.313020199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14d95b7a8e5f%3A0xa5c935f8dd4228cb!2sDua%20Naga%20Kosmetindo!5e0!3m2!1sid!2sid!4v1692265678934!5m2!1sid!2sid"
            width="100%"
            height="320"
            style="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  nama: '',
  email: '',
  telepon: '',
  pesan: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Kirim data ke backend Laravel (endpoint: /api/pesan)
const kirimPesan = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await axios.post('http://localhost:8000/api/pesan', form.value)

    successMessage.value = 'Pesan berhasil dikirim! Kami akan menghubungi Anda sesegera mungkin.'
    form.value = { nama: '', email: '', telepon: '', pesan: '' }
  } catch (error) {
    console.error('Error mengirim pesan:', error)
    errorMessage.value = 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.kontak-page {
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

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

/* === Form & Hubungi Kami === */
.kontak-section {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
}

.kontak-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
}

/* Card Form */
.card-form {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.card-form h2 {
  color: #1b5e20;
  margin-bottom: 8px;
  font-size: 1.4rem;
}

.card-form p {
  margin-bottom: 15px;
  font-size: 0.95rem;
  color: #555;
}

.card-form form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-form input,
.card-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  background: #fafafa;
  transition: border-color 0.3s, background 0.3s;
}

.card-form input:focus,
.card-form textarea:focus {
  border-color: #1b5e20;
  background: #fff;
}

.card-form button {
  background: #2e7d32;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.card-form button:hover {
  background: #256028;
}

.success {
  color: #2e7d32;
  background: #e8f5e9;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 0.9rem;
}

.error {
  color: #c62828;
  background: #ffebee;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 0.9rem;
}

/* Hubungi Kami */
.hubungi-kami h2 {
  color: #1b5e20;
  margin-bottom: 10px;
}

.hubungi-kami p {
  font-size: 0.95rem;
  margin-bottom: 12px;
  color: #444;
}

.hubungi-kami ul {
  list-style: none;
  padding: 0;
}

.hubungi-kami li {
  margin-bottom: 10px;
  font-size: 15px;
}

/* === Lokasi === */
.lokasi-section {
  max-width: 1100px;
  margin: 50px auto 80px;
  padding: 0 20px;
}

.lokasi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
}

.kunjungi-kami h2 {
  color: #1b5e20;
  margin-bottom: 12px;
}

.kunjungi-kami p {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 0.95rem;
  color: #444;
}

.map iframe {
  border-radius: 10px;
  width: 100%;
}

/* === Responsif === */
@media (max-width: 992px) {
  .kontak-grid,
  .lokasi-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    height: 180px;
  }

  .hero-overlay h1 {
    font-size: 1.8rem;
  }
}
</style>
