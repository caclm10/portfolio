<script setup>
import AppNavbar from './components/AppNavbar.vue'
import BottomBar from './components/BottomBar.vue';

</script>

<template>

  <app-navbar />

  <div class="min-h-screen pb-[66px] md:pb-0 pt-navbar-h text-black">
    <router-view></router-view>
  </div>

  <bottom-bar />

</template>