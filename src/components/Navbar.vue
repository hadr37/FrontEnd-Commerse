<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <img
          :src="isScrolled ? '/logophy.png' : '/logoputih.png'"
          alt="Phytomed"
        />
        <h1>
          <router-link to="/" class="logo-text">Phytomed Neo Farma</router-link>
        </h1>
      </div>

      <!-- Menu Tengah (Desktop) -->
      <ul class="nav-links">
        <li><router-link to="/" class="nav-item" exact>Beranda</router-link></li>
        <li><router-link to="/shop" class="nav-item" exact>Shop</router-link></li>
        <li><router-link to="/tentangkami" class="nav-item" exact>Tentang Kami</router-link></li>
        <li><router-link to="/Contact" class="nav-item" exact>Kontak Kami</router-link></li>
        <li><router-link to="/artikel" class="nav-item" exact>Artikel</router-link></li>
      </ul>

      <!-- Toggle Menu (Hanya tampil di mobile) -->
      <div class="menu-toggle" @click="toggleMenu">
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="menuOpen" class="mobile-menu">
      <router-link to="/" @click="toggleMenu">Beranda</router-link>
      <router-link to="/shop" @click="toggleMenu">Shop</router-link>
      <router-link to="/tentangkami" @click="toggleMenu">Tentang Kami</router-link>
      <a href="#" @click="toggleMenu">Kontak</a>
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
/* ===== NAVBAR FINAL ===== */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
  z-index: 1000;
  background-color: transparent;
  color: #fff;
}

.navbar.scrolled {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  color: #1b5e20;
}

/* ===== CONTAINER ===== */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
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
  font-size: 1.3rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.navbar.scrolled .logo-text {
  color: #1b5e20 !important;
}

/* ===== MENU DESKTOP ===== */
.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  position: absolute;
  left: 60%;
  transform: translateX(-50%);
}

.nav-links a,
.nav-item {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.router-link-active {
  color: #07a82a;
}

.navbar.scrolled .nav-links a,
.navbar.scrolled .nav-item {
  color: #1b5e20;
}

.navbar.scrolled .nav-links a:hover {
  color: #388e3c;
}

/* ===== MENU TOGGLE ===== */
.menu-toggle {
  display: none;
  cursor: pointer;
  color: inherit;
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease;
}

.menu-toggle:hover {
  transform: scale(1.1);
}

/* ===== MOBILE MENU ===== */
.mobile-menu {
  display: none;
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

.mobile-menu a:hover {
  color: #ffd54f;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    display: flex;
  }

  .logo img {
    width: 70px;
  }

  .navbar {
    height: auto;
  }
}
</style>
