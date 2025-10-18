<template>
  <div class="home">
    <!-- HERO SECTION -->
    <section class="hero">
      <!-- Video background -->
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/maincover.mp4" type="video/mp4" />
        Browser tidak mendukung video.
      </video>

      <!-- Teks di tengah -->
      <div class="hero-content">
        <h1>Pabrik Herbal Berkualitas</h1>
        <p>"Di pabrik herbal kami, setiap bahan alami dipilih 
            dengan teliti dan diproses menggunakan teknologi 
            modern untuk memastikan produk akhir tidak hanya berkualitas tinggi,
            tetapi juga aman dan efektif untuk menunjang kesehatan Anda secara alami."</p>
        <button class="btn-hero">Belanja Sekarang</button>
      </div>
    </section>

        <!-- LAYANAN KUSTOM -->
    <section class="services">
      <h2>Layanan Kami</h2>
      <div class="underline"></div>
      <div class="service-list">
        <div class="service-card" v-for="s in services" :key="s.id">
          <div class="icon" v-html="s.icon"></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </section>
    
 <section class="sekilas-kami">
    <div class="overlay">
      <div class="content">
        <h2>SEKILAS KAMI</h2>
        <p>
        Phytomed Neo Farma merupakan maklon produk herbal terbaik 
        dan terlengkap jenisnya sesuai standar CPOTB.Produk Phytomed
        menggunakan standar CPOTB sehingga kami memberikan 
        pelayanan kualitas produk terbaik. <br>
        
        Kami berkomitmen untuk memberikan layanan pelanggan yang responsif,
        konsultasi profesional, serta dukungan penuh mulai dari proses produksi
        hingga pengiriman produk ke tangan Anda.
        </p>
      </div>
    </div>
  </section>
<section id="cara-memulai" class="cara-memulai">
  <div class="container">
    <h2 class="section-title">CARA MEMULAI</h2>
  <div class="home">
    <img src="/caramemulai.png" alt="Cara Memulai" />
  </div>
  </div>
</section>

<section class="alasan-section">
  <div class="alasan-container">
    <!-- Gambar kiri -->
    <div class="alasan-images">
      <img src="/1.png" alt="Gedung Dua Naga" />
      <img src="/2.png" alt="Tim Produksi Dua Naga" />
    </div>

    <!-- Konten kanan -->
    <div class="alasan-content">
      <h2>ALASAN MEMILIH PHYTOMED</h2>
      <p>
        Anda dapat menciptakan produk herbal dengan brand milik anda sendiri. 
        Sedangkan Kami akan menyediakan bahan baku, mesin dan tenaga kerja.
        Kami akan membantu proses produksi dari awal 
        dan perizinan seperti Legalitas HKI, BPOM, hingga 
        produk anda siap jual Kami satu-satunya pabrik yang memberikan Konsultasi Gratis,
        Kunjungan Pabrik, dan Jasa Produksi paling terjangkau.
      </p>
      <ul>
        <li><strong>Produk Berkualitas Tinggi:</strong> Kami menghadirkan produk terbaik yang memenuhi standar industri tertinggi.</li>
        <li><strong>Layanan Terpercaya:</strong> Kepuasan pelanggan adalah prioritas kami dengan layanan cepat dan profesional.</li>
        <li><strong>Pengalaman Bertahun-tahun:</strong> Kami memahami kebutuhan pasar dengan lebih baik.</li>
      </ul>

      <div class="alasan-stats">
        <div>
          <h3>1.400+</h3>
          <p>Produk Ternotif</p>
        </div>
        <div>
          <h3>340+</h3>
          <p>Brand Terdaftar</p>
        </div>
        <div>
          <h3>5.000+</h3>
          <p>Proyek Selesai</p>
        </div>
        <div>
          <h3>180,000 +</h3>
          <p>PRODUKSI TIAP HARI</p>
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
import { ref } from 'vue'
const services = ref([
  {
    id: 1,
    title: "Formulasi Kustom",
    text: "Rancang produk yang paling cocok untuk merek Anda dengan formulasi perawatan kulit yang disesuaikan secara spesifik.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M12 2C6.477 2 2 6.477 2 12c0 2.22.808 4.26 2.144 5.852L12 22l7.856-4.148A9.956 9.956 0 0 0 22 12c0-5.523-4.477-10-10-10z'/></svg>`,
  },
  {
    id: 2,
    title: "Kemasan Kustom",
    text: "Pilih dari berbagai pilihan botol, tutup, tabung, penutup, dan desain kotak untuk kebutuhan kemasan merek Anda.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M12 2 2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z'/></svg>`,
  },
  {
    id: 3,
    title: "Sampel",
    text: "Program sampel unik kami memungkinkan Anda membuat sampel formulasi dan kemasan kustom untuk uji coba.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M7 2v2h2v4H7v2h10V8h-2V4h2V2H7zm2 8v12h6V10H9z'/></svg>`,
  },
  {
    id: 4,
    title: "Kepuasan Pelanggan",
    text: "Kami membantu membangun merek Anda dan menciptakan kerja sama saling menguntungkan untuk jangka panjang.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M2 3h20v14H6l-4 4V3z'/></svg>`,
  },
   {
    id: 5,
    title: "Solusi Terpadu",
    text: "Ciptakan produk yang paling sesuai dengan merek Anda melalui formulasi perawatan kulit kustom yang dirancang khusus.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'/></svg>`,
  },
  {
    id: 6,
    title: "Label Pribadi",
    text: "Mulai dengan cepat menggunakan label pribadi. Kami menyediakan berbagai formula stok yang dapat Anda pilih. Cukup tambahkan logo, label, dan pilih kemasan kustom sesuai keinginan.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M3 3h18v2H3V3zm0 4h18v14H3V7zm2 2v10h14V9H5z'/></svg>`,
  },
  {
    id: 7,
    title: "Sertifikat yang Relevan",
    text: "GMPC, ISO 22716, BSCI, FDA, MSDS, COA, serta dapat membantu untuk mendapatkan sertifikat CPNP, CPSR, PIF, Sertifikat Penjualan Bebas, Sertifikat Asal, SASO, dan lainnya.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M12 2l4 4h-3v9H11V6H8l4-4zM5 20v2h14v-2H5z'/></svg>`,
  },
  {
    id: 8,
    title: "Logistik & Pengiriman",
    text: "Dimanapun Anda berada di dunia, kami akan memproduksi kosmetik untuk Anda. Pengiriman ke seluruh dunia tersedia, Anda dapat memilih pengiriman melalui laut, kereta, atau udara.",
    icon: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#FFD700' viewBox='0 0 24 24'><path d='M20.92 8.58l-2.42-2.42A2 2 0 0017.17 6H6a2 2 0 00-2 2v8h2v-2h12v2h2v-4.59l.92.92 1.41-1.41L20.92 8.58zM6 10V8h11.17l1 1H6z'/></svg>`,
  }

])
</script>

<style scoped>
/* === HERO SECTION === */
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff; 
  z-index: 2;
  max-width: 700px;
  width: 90%;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero h1 span {
  color: #fff;
  font-weight: bold;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.btn-hero {
  background-color: #008037;
  color: black;
  padding: 12px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-hero:hover {
  background-color: #fff;
}


/* === CATEGORIES === */
.categories {
  padding: 80px 20px;
  text-align: center;
  background-color: #fff;
}

.categories h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #b8860b;
}

.category-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.category-card {
  background: white;
  border-radius: 15px;
  border: 2px solid #d4af37;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 200px;
  transition: transform 0.3s;
}

.category-card:hover {
  transform: translateY(-8px);
}

.category-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

.category-card h3 {
  font-size: 1.1rem;
  color: #333;
}

/* === FEATURED PRODUCTS === */
.featured {
  padding: 60px 20px;
  background: #f5f5f5;
  text-align: center;
}

.featured h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #b8860b;
}

.product-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.product-card {
  background: white;
  border-radius: 15px;
  border: 1px solid #d4af37;
  padding: 20px;
  width: 220px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-card img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.product-card h3 {
  color: #333;
  margin-bottom: 5px;
}

.price {
  color: #b8860b;
  font-weight: bold;
  margin-bottom: 10px;
}

.btn-buy {
  background-color: #d4af37;
  color: black;
  border: none;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-buy:hover {
  background-color: #ffd700;
}
/* cara memulai */
.cara-memulai {
  padding: 80px 0;
  text-align: center;
  background-color: #fff;
}
.cara-memulai .section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
  position: relative;
}

.cara-memulai .section-title::after {
  content: "";
  width: 60px;
  height: 4px;
  background: #f5c518;
  display: block;
  margin: 10px auto 0;
  border-radius: 2px;
}

.cara-memulai .image-wrapper {
  display: flex;
  justify-content: center;
}

.cara-memulai img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: none;
}
.sekilas-kami {
  position: relative;
  background: url('/banner-tengah.png') center/cover no-repeat;
  color: #fff;
  padding: 80px 20px;
}
/* sekilas kami */
.sekilas-kami .overlay {
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sekilas-kami .content {
  max-width: 900px;
  text-align: center;
}

.sekilas-kami h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
}

.sekilas-kami h2::after {
  content: "";
  width: 60px;
  height: 4px;
  background: #f5c518;
  display: block;
  margin: 10px auto 0;
  border-radius: 2px;
}

.sekilas-kami p {
  font-size: 1rem;
  line-height: 1.8;
}
.alasan-section {
  padding: 60px 120px;
  background-color: #fff;
}

.alasan-container {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}

.alasan-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.alasan-images img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
}

.alasan-content {
  flex: 1.2;
}

.alasan-content h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 20px;
}

.alasan-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.alasan-content ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 30px;
}

.alasan-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.alasan-stats h3 {
  color: #f5c518;
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
}

.alasan-stats p {
  font-weight: 600;
  color: #333;
  margin: 5px 0 0;
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

</style>
