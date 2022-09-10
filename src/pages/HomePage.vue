<script setup>
import profile from '../assets/profile.jpg'
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-1fr1.5fr h-screen-navbar">
        <div class="bg-black flex items-center justify-center text-white">
            <div class="md:w-[96px] z-10 uppercase whitespace-nowrap font-semibold tracking-widest ">
                <div class="mb-3">
                    <h6 class="text-4xl md:text-5xl mb-2.5">My Name Is</h6>
                    <h2 class="text-5xl md:text-6xl">Lewin Xander</h2>
                </div>
                <p class="font-bold bg-cyellow w-[fit-content] text-black py-1.5 px-3 md:py-3 md:px-5">I'm a fullstack
                    developer</p>
            </div>
        </div>
        <div>
            <img :src="profile" alt="profile" class="object-cover w-full h-full">
        </div>
    </div>
</template>