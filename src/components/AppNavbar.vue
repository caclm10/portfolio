<script setup>
import { menus } from '../data'
</script>

<template>
    <header class="h-navbar-h fixed top-0 inset-x-0 grid grid-cols-1 md:grid-cols-1fr1.5fr text-white z-10">
        <div class="h-full flex items-center justify-center bg-black">
            <h1 class="text-lg uppercase">
                <router-link to="/">Portfolio.</router-link>
            </h1>
        </div>

        <nav class="h-full hidden md:flex items-center justify-center bg-cgray uppercase space-x-10">
            <router-link v-for="menu in menus" :key="menu.to" :to="menu.to" class="menu-link" active-class="active">
                {{menu.label}}
            </router-link>
        </nav>
    </header>
</template>
