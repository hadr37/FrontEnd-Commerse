<template>
  <div class="kontak-page">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/1.png" alt="Tentang Kami" class="hero-image" />
      <div class="hero-overlay">
        <h1>TENTANG KAMI</h1>
      </div>
    </section>

    <!-- Kirim Pesan & Hubungi Kami -->
    <section class="kontak-section">
      <div class="kontak-grid">
        <!-- Kirim Pesan -->
        <div class="card-form">
          <h2>Kirimkan Pesan</h2>
          <p>Kirimkan pesan kepada kami di bawah dan kami akan menghubungi Anda sesegera mungkin!</p>
          <form>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Alamat Email" required />
            <input type="text" placeholder="No Telepon" required />
            <textarea rows="4" placeholder="Pesan Anda..." required></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
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

    <!-- Kunjungi Kami & Map -->
    <section class="lokasi-section">
      <div class="lokasi-grid">
        <div class="kunjungi-kami">
          <h2>Kunjungi Kami</h2>
          <p><strong>Alamat Pabrik:</strong><br>
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
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

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

/* === Kirim Pesan & Hubungi Kami === */
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

/* Kotak putih (form) */
.card-form {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s;
}

.card-form:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
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
  outline: none;
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

/* === Kunjungi Kami & Map === */
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

.kunjungi-kami ul {
  list-style: none;
  padding: 0;
}

.kunjungi-kami li {
  margin-bottom: 6px;
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
