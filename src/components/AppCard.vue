<script setup>
defineProps({
    title: String,
    description: String,
    img: String
})
</script>

<template>
    <div class="bg-white shadow-lg rounded-md h-100 text-center p-7">
        <img :src="img" alt="tool" class="mx-auto h-[50px] w-[50px] mb-2">
        <h5 class="text-2xl font-medium mb-3">{{ title }}</h5>
        <p class="text-cgray-300">{{ description }}</p>
    </div>
</template>
