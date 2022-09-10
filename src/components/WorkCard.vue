<script setup>
defineProps({
    img: String,
    title: String
})
</script>

<template>
    <div>
        <img :src="img" alt="work" class="h-full w-full object-contain">

        <div class="mt-3">
            <h4 class="text-center font-semibold text-2xl">{{title}}</h4>
        </div>
    </div>
</template>