<template>
    <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/phyto.png" alt="Tentang Kami" class="hero-image" />
      <div class="hero-overlay">
        <h1>TENTANG KAMI</h1>
      </div>
    </section>

    <!-- Profil Section -->
    <section class="profile">
      <h2>PROFIL KAMI</h2>
      <div class="underline"></div>

      <div class="profile-content">
        <!-- Teks di kiri -->
        <div class="text">
          <p>
            <strong>PHYTOMED NEO FARMA</strong> adalah pabrik maklon produk herbal
            yang berfokus membantu perusahaan, baik skala nasional maupun internasional,
            mewujudkan brand herbal Anda sendiri. Kami menyediakan layanan lengkap mulai dari
            riset dan formulasi produk, penyediaan bahan baku, mesin, tenaga kerja,
            hingga proses produksi produk herbal dengan berbagai bentuk seperti serbuk oral,
            kapsul/pil, dan cairan obat baik untuk konsumsi dalam maupun luar.
            Selain itu, kami juga membantu pengurusan legalitas produk seperti BPOM,
            HALAL, dan HKI agar produk siap edar secara resmi.
          </p>

          <p>
            Kami memberikan konsultasi gratis, kunjungan pabrik,
            dan jasa produksi dengan harga terjangkau. Produk yang dihasilkan menggunakan
            standar CPOTB (Cara Pembuatan Obat Tradisional yang Baik)
            sehingga kualitas dan keamanan produk terjamin.
          </p>
        </div>

        <!-- Gambar di kanan -->
        <div class="image">
          <img src="/pabrik.png" alt="Pabrik Phytomed Neo Farma" />
        </div>
      </div>
    </section>

    <!-- Alasan Memilih -->
    <section class="alasan-section">
      <div class="alasan-container">
        <!-- Gambar -->
        <div class="alasan-images">
          <img src="/1.png" alt="Gedung Phytomed" />
          <img src="/2.png" alt="Tim Produksi Phytomed" />
        </div>

        <!-- Konten kanan -->
        <div class="alasan-content">
          <h2>ALASAN MEMILIH PHYTOMED</h2>
          <p>
            Anda dapat menciptakan produk herbal dengan brand milik Anda sendiri.
            Kami akan menyediakan bahan baku, mesin, dan tenaga kerja,
            serta membantu proses produksi dari awal
            hingga legalitas seperti HKI, BPOM, dan HALAL.
            Kami satu-satunya pabrik yang memberikan konsultasi gratis,
            kunjungan pabrik, dan jasa produksi paling terjangkau.
          </p>

          <ul>
            <li><strong>Produk Berkualitas Tinggi:</strong> Kami menghadirkan produk terbaik yang memenuhi standar industri tertinggi.</li>
            <li><strong>Layanan Terpercaya:</strong> Kepuasan pelanggan adalah prioritas kami dengan layanan cepat dan profesional.</li>
            <li><strong>Pengalaman Bertahun-tahun:</strong> Kami memahami kebutuhan pasar dengan lebih baik.</li>
          </ul>

          <div class="alasan-stats">
            <div><h3>1.400+</h3><p>Produk Ternotif</p></div>
            <div><h3>340+</h3><p>Brand Terdaftar</p></div>
            <div><h3>5.000+</h3><p>Proyek Selesai</p></div>
            <div><h3>180.000+</h3><p>Produksi Tiap Hari</p></div>
          </div>
        </div>
      </div>
    </section>

 
    <!-- FAQ + FORM -->
    <section class="faq-form-section">
      <div class="faq-form-container">
        <!-- Form -->
        <div class="form-box">
          <h3>Kirimkan pesan kepada kami</h3>
          <form @submit.prevent="kirimPesan">
            <input v-model="form.nama" type="text" placeholder="Nama" required />
            <input v-model="form.email" type="email" placeholder="E-mail" required />
            <input v-model="form.telepon" type="text" placeholder="No Whatsapp" />
            <textarea v-model="form.pesan" rows="4" placeholder="Pesan" required></textarea>
            <button type="submit" :disabled="loading">
              {{ loading ? "Mengirim..." : "Kirim" }}
            </button>
          </form>
          <p v-if="successMessage" class="success">{{ successMessage }}</p>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>

        <!-- FAQ -->
        <div class="faq-box">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <span class="arrow" :class="{ open: activeFaq === index }">⌄</span>
            </button>
            <div v-if="activeFaq === index" class="faq-answer">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sertifikasi-section">
  <h2 class="section-title">Sertifikasi</h2>
  <div class="line"></div>

  <div class="cert-container">
    <div class="cert-item">
      <img src="/halal.png" alt="Sertifikat Halal" />
      <p>Telah memenuhi uji standar halal dari Majelis Ulama Indonesia</p>
    </div>

    <div class="cert-item">
      <img src="/bpom.png" alt="Sertifikat BPOM" />
      <p>Telah memenuhi ijin edar dari Badan Pengawasan Obat dan Makanan</p>
    </div>

    <div class="cert-item">
      <img src="/kemenkumham.png" alt="Sertifikat CPKB" />
      <p>Telah memenuhi persyaratan Cara Pembuatan Kosmetik yang Baik</p>
    </div>
  </div>
</section>

      <!-- === CLIENT KAMI (CAROUSEL) === -->
    <section class="client-section">
      <div class="client-container">
        <div class="client-text">
          <h2>CLIENT KAMI</h2>
          <p>Kami dipercaya oleh berbagai brand ternama dalam industri herbal dan kecantikan.</p>
        </div>

        <div class="carousel">
          <div class="carousel-track">
            <img src="/fimel.png" alt="Client Fimel" />
            <img src="/huangyu.png" alt="Client Huangyu" />
            <img src="/phyto-v.png" alt="Client PhytoV" />
            <!-- duplikasi agar looping mulus -->
            <img src="/fimel.png" alt="Client Fimel" />
            <img src="/huangyu.png" alt="Client Huangyu" />
            <img src="/phyto-v.png" alt="Client PhytoV" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/pesan";

const activeFaq = ref(null);
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const form = ref({
  nama: "",
  email: "",
  telepon: "",
  pesan: "",
});
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// 🔹 Fungsi kirim pesan
const kirimPesan = async () => {
  successMessage.value = "";
  errorMessage.value = "";
  loading.value = true;

  try {
    const res = await axios.post(API_URL, form.value);
    successMessage.value = res.data.message || "Pesan berhasil dikirim!";
    form.value = { nama: "", email: "", telepon: "", pesan: "" };
  } catch (err) {
    errorMessage.value = "Gagal mengirim pesan. Coba lagi nanti.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const faqs = [
  {
    question: "Apa itu Phytomed Neo Farma?",
    answer:
      "Kami adalah pabrik maklon produk herbal yang siap membantu Anda menciptakan brand herbal sendiri dengan layanan lengkap mulai dari riset, produksi, hingga legalitas produk.",
  },
  {
    question: "Layanan apa saja yang disediakan Phytomed Neo Farma?",
    answer:
      "Kami menyediakan konsultasi gratis, produksi produk herbal (serbuk, kapsul, pil, cairan), penyediaan bahan baku, mesin, tenaga kerja, serta pengurusan legalitas seperti BPOM dan HALAL.",
  },
  {
    question: "Apakah produk yang diproduksi memiliki standar kualitas?",
    answer:
      "Ya, kami menggunakan standar CPOTB (Cara Pembuatan Obat Tradisional yang Baik) untuk menjamin kualitas dan keamanan produk yang kami produksi.",
  },
  {
    question: "Bagaimana proses produksi di Phytomed Neo Farma?",
    answer:
      "Tim ahli kami membantu mulai dari konsep dan riset formulasi produk, produksi skala besar maupun kecil, hingga proses perizinan agar produk siap edar di pasaran.",
  },
  {
    question:
      "Apakah Phytomed Neo Farma menerima pesanan maklon produk herbal skala kecil?",
    answer:
      "Ya, kami melayani produksi skala besar maupun kecil sesuai kebutuhan Anda dengan pelayanan yang profesional dan harga terjangkau.",
  },
  {
    question: "Bagaimana cara memulai kerja sama dengan Phytomed Neo Farma?",
    answer:
      "Anda bisa menghubungi kami untuk konsultasi gratis, dan kami akan mendampingi proses pembuatan produk herbal Anda dari awal hingga selesai.",
  },
];
</script>

<style scoped>
.about-page {
  font-family: "Poppins", sans-serif;
  color: #333;
}

/* === Hero Section === */
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-overlay h1 {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
}

/* === Profile Section === */
.profile {
  padding: 60px 10%;
  background: #fff;
  text-align: center;
}

.profile h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.underline {
  width: 60px;
  height: 4px;
  background: #1b5e20;
  margin: 0 auto 40px;
  border-radius: 2px;
}

.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  text-align: left;
}

.text {
  flex: 1 1 50%;
  line-height: 1.8;
  font-size: 0.95rem;
}

.image {
  flex: 1 1 40%;
  text-align: right;
}

.image img {
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* === Alasan Section === */
.alasan-section {
  padding: 60px 120px;
}

.alasan-container {
  display: flex;
  gap: 50px;
  align-items: stretch;
}

.alasan-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.alasan-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.alasan-content {
  flex: 1.2;
}

.alasan-content h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.alasan-content ul {
  padding-left: 20px;
  list-style: disc;
}

.alasan-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-top: 20px;
}

.alasan-stats h3 {
  color: #1b5e20;
  font-size: 2rem;
}

/* === FAQ & Form Section === */
.faq-form-section {
  background-color: #f9fafb;
  padding: 80px 120px;
}

.faq-form-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.form-box {
  background: #fff;
  flex: 1;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.form-box h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.form-box input,
.form-box textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
}

.form-box button {
  width: 100%;
  background: #1b5e20;
  border: none;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.faq-box {
  flex: 1;
}

.faq-item {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 12px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 15px 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 20px 15px 20px;
  color: #555;
  line-height: 1.6;
}

/* === Responsif === */
@media (max-width: 1024px) {
  .alasan-section,
  .faq-form-section {
    padding: 40px 20px;
  }

  .alasan-container,
  .faq-form-container {
    flex-direction: column;
  }

  .alasan-images img {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2rem;
  }

  .profile-content {
    flex-direction: column;
    text-align: center;
  }

  .image {
    text-align: center;
  }

  .image img {
    max-width: 100%;
  }

  .alasan-images img {
    height: 200px;
  }
}
/* === CLIENT KAMI === */
.client-section {
  background-color: #fafafa;
  padding: 80px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1200px;
}

.client-text {
  flex: 1;
}

.client-text h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.client-text p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.carousel {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  gap: 40px;
  animation: scroll 15s linear infinite;
}

.carousel-track img {
  width: 160px;
  height: auto;
  object-fit: contain;
  filter: brightness(0.9);
  transition: transform 0.3s ease;
}

.carousel-track img:hover {
  transform: scale(1.1);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.sertifikasi-section {
  text-align: center;
  padding: 70px 30px;
  background: #fff;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
}

.line {
  width: 60px;
  height: 4px;
  background: #1b5e20;
  margin: 0 auto 40px;
  border-radius: 2px;
}

.cert-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
}

.cert-item {
  width: 250px;
  text-align: center;
}

.cert-item img {
  width: 140px;          
  height: 140px;        
  object-fit: contain;    
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}
.cert-item img:hover {
  transform: scale(1.08);
}

.cert-item p {
  font-size: 15px;
  color: #333;
  line-height: 1.5;
}
.success {
  color: green;
  margin-top: 10px;
  font-weight: 500;
}
.error {
  color: red;
  margin-top: 10px;
  font-weight: 500;
}

</style>
