<script setup>
import AppContainer from '../components/AppContainer.vue'
import PageContent from '../components/PageContent.vue'

</script>

<template>

    <page-content class="flex items-center bg-background">
        <app-container class="grid md:grid-cols-2">
            <div class="w-full hidden md:block">
                <div class="mx-auto w-[420px] h-[400px] relative">
                    <div class="absolute h-[350px] w-[350px] top-0 left-[16px] bg-cgray-800"></div>
                    <div class="absolute h-[350px] w-[350px] bottom-0 right-[16px] bg-cgray-700"></div>
                </div>
            </div>
            <div class="w-full">
                <div class="flex space-x-16 mb-8">
                    <div class="text-right font-medium">
                        <p>who am I</p>
                        <div class="relative left-1">
                            <span class="text-3xl uppercase relative z-[1]">Hello</span>
                            <div class="absolute bg-cyellow left-0 bottom-0 top-4 -right-4"></div>
                        </div>
                    </div>
                    <div class="flex flex-col flex-grow self-center space-y-5">
                        <span class="h-[0.5px] bg-cgray-400"></span>
                        <span class="h-[0.5px] bg-cgray-400"></span>
                        <span class="h-[0.5px] bg-cgray-400"></span>
                    </div>
                </div>

                <p class="mb-5">I'm Lewin Xander Gulo, an undergraduate student majoring in computer science. I started
                    making the web a few years ago and fell in love with it. I'm also interested in learning new
                    technologies. Normally I build a full-stack web with Laravel, but I'm also used to building a
                    frontend using React or an API using Express.
                    I have created several websites or web applications, one of which is a student report card
                    management application for Eria Private High School.</p>

                <p>
                    I have created several websites or web applications, one of which is a student report card
                    management application for Eria Private High School
                </p>
            </div>
        </app-container>
    </page-content>

</template>