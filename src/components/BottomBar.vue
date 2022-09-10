<script setup>
import { menus } from '../data'
</script>

<template>
    <nav
        class="fixed bottom-0 inset-x-0 flex md:hidden items-center justify-center bg-cgray uppercase space-x-5 pt-3 pb-7 text-white">
        <router-link v-for="menu in menus" :key="menu.to" :to="menu.to" class="menu-link" active-class="active">
            {{menu.label}}
        </router-link>
    </nav>
</template>