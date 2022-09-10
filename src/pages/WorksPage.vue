<script setup>
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppContainer from '../components/AppContainer.vue'
import PageContent from '../components/PageContent.vue'
import PageHeader from '../components/PageHeader.vue'
import WorkCard from '../components/WorkCard.vue'
import { works } from '../data'

import 'swiper/css'
import 'swiper/css/pagination'

const swiperModules = [Pagination]
</script>
    
<template>
    <page-content class="bg-white py-5">
        <app-container>
            <page-header title="My Works" subtitle="latest & recent projects" />

            <div class="hidden md:grid grid-cols-2 gap-x-20">
                <work-card v-for="(work, index) in works" :key="index" :img="work.image" :title="work.title" />
            </div>

            <div class="md:hidden">
                <swiper :modules="swiperModules" :space-between="50" :pagination="{ clickable: true }" class="!pb-10">
                    <swiper-slide v-for="(work, index) in works" :key="index">
                        <work-card :title="work.title" :img="work.image" />
                    </swiper-slide>
                </swiper>
            </div>
        </app-container>
    </page-content>
</template>