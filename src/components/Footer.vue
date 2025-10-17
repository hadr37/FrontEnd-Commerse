<template>
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
              Jl. Gawok No. 7, Dusun , Geneng, Kec . Gatak, Kabupaten Sukoharjo, Jawa Tengah 57557
            </div>
          </div>

          <!-- Customer Service & Email -->
          <div class="contact-item">
            <i class="fas fa-headset"></i>
            <div>
              <strong>Customer Service</strong><br />
              CS 1: +62 811-2800-181<br />
              CS 2: 0811 2800 278<br />
              <div>   <i class="fas fa-envelope" style="margin-right: 6px; color: #f5c518;"></i>
              <strong>Email</strong> <br />
              marketing@phytomed.co.id</div>
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
          Phytomed Neo Farma merupakan maklon produk herbal terbaik 
          dan terlengkap jenisnya sesuai standar CPOTB.Produk Phytomed
          menggunakan standar CPOTB sehingga kami memberikan 
          pelayananan kualitas produk terbaik.

        </p>
      </div>

      <div class="footer-column">
        <h3>KATEGORI POPULER</h3>
        <ul>
          <li>Sunscreen</li>
          <li>Face Care</li>
          <li>Body Care</li>
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
.footer {
  background-color: #008037;
  color: #fff;
  padding: 20px 40px;
  font-family: "Poppins", sans-serif;
}

/* Bagian atas */
.footer-top {
  text-align: center;
  margin-bottom: 20px;
}

.footer-info h2 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.footer-contacts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.8rem;
  max-width: 260px;
  line-height: 1.5;
  text-align: left;
}

.contact-item i {
  color: #f5c518;
  font-size: 0.9rem;
  margin-top: 3px;
}

.contact-item a {
  color: #fff;
  margin-right: 8px;
  transition: color 0.3s;
}

.contact-item a:hover {
  color: #f5c518;
}

/* Garis pemisah */
hr {
  border: 0;
  border-top: 1px solid #333;
  margin: 15px auto;
  width: 85%;
}

/* Bagian bawah */
.footer-bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  text-align: center; 
}

.footer-column h3 {
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.footer-column p,
.footer-column li {
  color: #ccc;
  font-size: 0.7rem;
  line-height: 1.4;
  margin-bottom: 4px;
}

.footer-column li {
  list-style: none;
  cursor: pointer;
  transition: color 0.3s;
}

.footer-column li:hover {
  color: #f5c518;
}

/* Responsif */
@media (max-width: 992px) {
  .footer-bottom {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 600px) {
  .footer-bottom {
    grid-template-columns: 1fr;
  }
}
</style>
