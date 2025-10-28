<template>
  <!-- Section Konsultasi -->
  <section class="konsultasi-section">
    <div class="overlay"></div>
    <div class="konsultasi-container">
      <div class="konsultasi-text">
        <h2>Sesuai Merek Anda Sendiri</h2>
        <p>
          Kami menawarkan solusi lengkap yang disesuaikan untuk produk kosmetik Anda,
          hubungi pakar penjualan kami sekarang!
        </p>
      </div>
      <div class="konsultasi-btn-wrapper">
        <a href="#kontak" class="konsultasi-btn">KONSULTASI PRODUK PADA KAMI</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <!-- Bagian atas -->
    <div class="footer-top">
      <div class="footer-info">
        <h2>PHYTOMED NEO FARMA</h2>

        <div class="footer-contacts">
          <!-- Alamat -->
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <strong>Alamat Pabrik</strong><br />
              Jl. Gawok No. 7, Dusun, Geneng, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah 57557
            </div>
          </div>

          <!-- Customer Service & Email -->
          <div class="contact-item">
            <i class="fas fa-headset"></i>
            <div>
              <strong>Customer Service</strong><br />
              CS 1: +62 811-2800-181<br />
              CS 2: 0811 2800 278<br />
              <div>
                <i class="fas fa-envelope" style="margin-right: 6px; color: #f5c518;"></i>
                <strong>Email</strong><br />
                marketing@phytomed.co.id
              </div>
            </div>
          </div>

          <!-- Follow Us -->
          <div class="contact-item">
            <i class="fas fa-share-alt"></i>
            <div>
              <strong>Follow Us</strong><br />
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <!-- Bagian bawah -->
    <div class="footer-bottom">
      <div class="footer-column">
        <h3>TENTANG KAMI</h3>
        <p>
          Phytomed Neo Farma merupakan maklon produk herbal terbaik dan terlengkap jenisnya sesuai standar CPOTB.
          Produk Phytomed menggunakan standar CPOTB sehingga kami memberikan pelayananan kualitas produk terbaik.
        </p>
      </div>

      <div class="footer-column">
        <h3>KATEGORI POPULER</h3>
        <ul>
          <li>Kapsul</li>
          <li>Serbuk Oral</li>
          <li>Oil</li>
          <li>Lainnya</li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>PABRIK</h3>
        <ul>
          <li>Pabrikan</li>
          <li>Tim R & D</li>
          <li>Quality Control</li>
          <li>Pameran Perdagangan</li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>LAYANAN TURNKEY</h3>
        <ul>
          <li>Sample</li>
          <li>Konsultasi</li>
          <li>Legalitas BPOM</li>
          <li>Legalitas HKI</li>
          <li>Produksi</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 
   SECTION KONSULTASI
 */
.konsultasi-section {
  position: relative;
  background: url("/phytomedneofarma_cover.jpg") center center/cover no-repeat;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.konsultasi-section .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.konsultasi-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  color: #fff;
}

.konsultasi-text {
  max-width: 60%;
}

.konsultasi-text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.konsultasi-text p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.konsultasi-btn-wrapper {
  text-align: right;
}

.konsultasi-btn {
  display: inline-block;
  background: #fff;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  padding: 18px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;
}

.konsultasi-btn:hover {
  background: #1b5e20;
  color: #fff;
  transform: scale(1.05);
}

/* Responsif */
@media (max-width: 900px) {
  .konsultasi-container {
    flex-direction: column;
    text-align: center;
  }

  .konsultasi-text {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .konsultasi-btn-wrapper {
    text-align: center;
  }
}

/* 
   FOOTER
*/
.footer {
  background-color: #008037;
  color: #fff;
  padding: 15px 25px;
  font-family: "Poppins", sans-serif;
}

.footer-top {
  text-align: center;
  margin-bottom: 10px;
}

.footer-info h2 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.footer-contacts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.7rem;
  max-width: 220px;
  line-height: 1.4;
  text-align: left;
}

.contact-item i {
  color: #f5c518;
  font-size: 0.8rem;
  margin-top: 3px;
}

.contact-item a {
  color: #fff;
  margin-right: 5px;
  transition: color 0.3s;
}

.contact-item a:hover {
  color: #f5c518;
}

hr {
  border: 0;
  border-top: 1px solid #333;
  margin: 10px auto;
  width: 80%;
}

.footer-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-content: center;
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}

.footer-column h3 {
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.footer-column p,
.footer-column li {
  color: #ccc;
  font-size: 0.65rem;
  line-height: 1.3;
  margin-bottom: 3px;
}

.footer-column li {
  list-style: none;
  cursor: pointer;
  transition: color 0.3s;
}

.footer-column li:hover {
  color: #f5c518;
}

/* Responsif Footer */
@media (max-width: 992px) {
  .footer-bottom {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer-bottom {
    grid-template-columns: 1fr;
  }
}
</style>
