<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img src="/logophy.png" alt="Dua Naga" />
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
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50 // jika lebih dari 50px, ubah warna navbar
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ====== NAVBAR TRANSPARAN & SCROLL EFFECT ====== */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.7rem 1rem;
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
  z-index: 1000;
  background-color: transparent;
  color: #fff;
}

/* Ketika discroll, ubah warna */
.navbar.scrolled {
  background-color: #1b5e20;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Struktur dasar */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo img {
  width: 70px;
  height: auto;
  background-color: #fff;
  border-radius: 6px;
  padding: 3px;
}

.logo-text {
  color: #fff !important;
  text-decoration: none !important;
  font-size: 1.4rem;
  font-weight: 700;
}

/* Menu */
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
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.router-link-active {
  color: #ffd54f;
}

/* Tombol */
.nav-buttons .btn {
  border: 1px solid #fff;
  color: #fff;
  padding: 4px 10px;
  border-radius: 5px;
  background: transparent;
  margin-right: 6px;
  font-size: 0.85rem;
  cursor: pointer;
}

.nav-buttons .btn-solid {
  background-color: #fff;
  color: #1b5e20;
  font-weight: 600;
}

.nav-buttons .btn:hover {
  opacity: 0.8;
}

/* Menu mobile */
.menu-toggle {
  display: none;
  cursor: pointer;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  background: rgba(27, 94, 32, 0.95);
  padding: 0.8rem;
  backdrop-filter: blur(5px);
}

.mobile-menu a {
  color: #fff;
  margin: 0.4rem 0;
  text-decoration: none;
}

@media (max-width: 768px) {
  .nav-links,
  .nav-buttons {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
}
</style>
