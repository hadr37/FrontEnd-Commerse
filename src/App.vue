<template>
  <Navbar />


  <router-view />

     <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue"
import './assets/style.css'
</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
