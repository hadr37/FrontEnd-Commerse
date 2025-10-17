<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img src="/logophy.png" alt="Dua Naga" />
    <h1>
  <router-link
    to="/"
    class="logo-text"
  >
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
        <li><a href="#">Layanan</a></li>
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
      <a href="#">Layanan</a>
      <a href="#">Kontak</a>
      <button class="btn">Masuk</button>
      <button class="btn btn-solid">Daftar</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
</script>

<style scoped>
/* ====== NAVBAR HIJAU ====== */
.navbar {
  background-color: #1b5e20; 
  color: #fff;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  width: 100px;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 5px;
}

/* Menu */
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a,
.nav-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
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
  padding: 6px 12px;
  border-radius: 6px;
  background: transparent;
  margin-right: 8px;
  cursor: pointer;
}

.nav-buttons .btn-solid {
  background-color: #ffd54f;
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
  background: #2e7d32;
  padding: 1rem;
}

.mobile-menu a {
  color: #fff;
  margin: 0.5rem 0;
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
.logo-text {
  color: #fff !important;
  text-decoration: none !important;
  font-size: 1.8rem; 
  font-weight: 700;
  transition: none;
}

.logo-text:hover,
.logo-text:focus,
.logo-text:active,
.logo-text.router-link-active {
  color: #fff !important;
  text-decoration: none !important;
}

</style>
