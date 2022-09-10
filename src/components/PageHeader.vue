<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="flex justify-center mb-20 md:mb-5">
        <div class="text-right">
            <h3 class="text-5xl font-semibold uppercase mb-1.5">{{ title }}</h3>
            <h4 class="lowercase font-medium ">
                <span class="bg-cyellow pl-4 h-[20px] inline-block">{{ subtitle }}</span>
            </h4>
        </div>
    </div>
</template>