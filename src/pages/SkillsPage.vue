<script setup>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppContainer from '../components/AppContainer.vue'
import AppCard from '../components/AppCard.vue'
import PageContent from '../components/PageContent.vue'
import PageHeader from '../components/PageHeader.vue'
import { skills } from '../data'

import 'swiper/css'
import 'swiper/css/pagination'

const swiperModules = [Pagination]
</script>

<template>
    <page-content class="bg-white py-5">
        <app-container>
            <page-header title="My Skills" subtitle="Languages & Frameworks" />

            <div class="hidden md:grid grid-cols-3 gap-x-32 gap-y-10">
                <app-card v-for="(skill, index) in skills" :key="index" :title="skill.title"
                    :description="skill.description" :img="skill.image" />
            </div>

            <div class="md:hidden">
                <swiper :modules="swiperModules" :space-between="50" :pagination="{ clickable: true }" class="!pb-2">
                    <swiper-slide v-for="(skill, index) in skills" :key="index">
                        <app-card :title="skill.title" :description="skill.description" :img="skill.image" />
                    </swiper-slide>
                </swiper>
            </div>
        </app-container>
    </page-content>
</template>