<script setup>
import AppNavbar from './components/AppNavbar.vue'
import BottomBar from './components/BottomBar.vue';

</script>

<template>

  <app-navbar />

  <div class="min-h-screen pt-navbar-h">
    <div class="h-screen-navbar text-black">
      <router-view></router-view>
    </div>
  </div>

  <bottom-bar />

</template>