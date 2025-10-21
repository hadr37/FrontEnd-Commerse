<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <!-- Ganti logo otomatis saat discroll -->
        <img
          :src="isScrolled ? '/logophy.png' : '/logoputih.png'"
          alt="Dua Naga"
        />
        <h1>
          <router-link to="/" class="logo-text">
            Phytomed Neo Farma
          </router-link>
        </h1>
      </div>

      <!-- Menu desktop -->
      <ul class="nav-links">
        <li>
          <router-link to="/" class="nav-item" exact>Beranda</router-link>
        </li>
        <li>
          <router-link to="/shop" class="nav-item" exact>Shop</router-link>
        </li>
        <li>
          <router-link to="/tentangkami" class="nav-item" exact>Tentang Kami</router-link>
        </li>
        <li><a href="#">Kontak</a></li>
      </ul>

      <!-- Tombol -->
      <div class="nav-buttons">
        <button class="btn">Masuk</button>
        <button class="btn btn-solid">Daftar</button>
      </div>

      <!-- Menu mobile toggle -->
      <div class="menu-toggle" @click="toggleMenu">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="mobile-menu">
      <router-link to="/" @click="toggleMenu">Beranda</router-link>
      <router-link to="/shop" @click="toggleMenu">Shop</router-link>
      <router-link to="/tentangkami" @click="toggleMenu">Tentang Kami</router-link>
      <a href="#">Kontak</a>
      <button class="btn">Masuk</button>
      <button class="btn btn-solid">Daftar</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const menuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* ===== NAVBAR STYLING FINAL ===== */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px; /* 🔹 tinggi tetap */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem; /* 🔹 padding seragam */
  transition: background-color 0.4s ease, box-shadow 0.4s ease, color 0.4s ease;
  z-index: 1000;
  background-color: transparent;
  color: #fff;
  box-sizing: border-box;
}

.navbar.scrolled {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  color: #1b5e20;
}

/* Container dalam navbar */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== LOGO ===== */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo img {
  width: 100px;
  max-height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-text {
  color: #fff !important;
  text-decoration: none !important;
  font-size: 1.4rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

/* Ubah warna teks logo saat discroll */
.navbar.scrolled .logo-text {
  color: #1b5e20 !important;
}

/* ===== MENU DESKTOP ===== */
.nav-links {
  display: flex;
  list-style: none;
  gap: 1.2rem;
}

.nav-links a,
.nav-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.router-link-active {
  color: #ffd54f;
}

/* Warna menu saat discroll */
.navbar.scrolled .nav-links a,
.navbar.scrolled .nav-item {
  color: #1b5e20;
}

.navbar.scrolled .nav-links a:hover {
  color: #388e3c;
}

/* ===== TOMBOL LOGIN/DAFTAR ===== */
.nav-buttons .btn {
  border: 1px solid #fff;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  background: transparent;
  margin-right: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-buttons .btn-solid {
  background-color: #fff;
  color: #1b5e20;
  font-weight: 600;
}

.nav-buttons .btn:hover {
  opacity: 0.85;
}

/* Saat discroll ubah warna tombol */
.navbar.scrolled .btn {
  border-color: #1b5e20;
  color: #1b5e20;
}

.navbar.scrolled .btn-solid {
  background-color: #1b5e20;
  color: #fff;
}

/* ===== MENU MOBILE ===== */
.menu-toggle {
  display: none;
  cursor: pointer;
  color: inherit;
  width: 28px;
  height: 28px;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  background: rgba(27, 94, 32, 0.97);
  padding: 0.8rem 1rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.mobile-menu a {
  color: #fff;
  margin: 0.4rem 0;
  text-decoration: none;
  font-size: 1rem;
}

.mobile-menu .btn {
  margin-top: 0.5rem;
  width: 100%;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .nav-links,
  .nav-buttons {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .logo img {
    width: 70px;
  }

  .navbar {
    height: 70px;
  }
}
</style>