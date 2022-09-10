<script setup>
import PageContent from '../components/PageContent.vue'
import AppContainer from '../components/AppContainer.vue'
</script>

<template>
    <page-content class="bg-black flex pt-5 md:pt-0 md:items-center text-white">
        <app-container>
            <div class="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
                <div class="flex flex-col justify-between">
                    <div class="font-semibold">
                        <h3 class="text-5xl md:text-8xl mb-4 md:mb-7">Let's talk</h3>
                        <h4 class="text-xl md:text-2xl">Ask me anything or just say hi...</h4>
                    </div>
                    <div class="space-y-4 mt-5 md:mt-0">
                        <div class="flex items-center space-x-8">
                            <v-icon name="hi-solid-phone" class="text-white h-6 w-6" />
                            <span>082274620852 (ID)</span>
                        </div>
                        <div class="flex items-center space-x-8">
                            <v-icon name="hi-solid-mail" class="text-white h-6 w-6" />
                            <span>lewinxander@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class="md:min-w-[550px]">
                    <form action="#">
                        <div class="mb-5">
                            <input type="text" name="name" id="name" placeholder="Your name">
                        </div>
                        <div class="mb-5">
                            <input type="text" name="email" id="email" placeholder="Your e-mail address">
                        </div>
                        <div class="mb-5">
                            <textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
                        </div>

                        <div class="grid">
                            <button type="button"
                                class="uppercase border-[3px] rounded-md py-1.5 border-white hover:border-indigo-500 active:border-cgray-800 active:bg-cgray-800 transition-all">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="flex justify-end mt-5 md:mt-16 space-x-12">
                <a href="https://linkedin.com/in/lewin-xander-b30563249" target="_blank">
                    <v-icon name="bi-linkedin" class="text-white h-5 w-5" />
                </a>
                <a href="https://github.com/caclm10" target="_blank">
                    <v-icon name="bi-github" class="text-white h-5 w-5" />
                </a>
                <a href="https://instagram.com/lewin.xander" target="_blank">
                    <v-icon name="bi-instagram" class="text-white h-5 w-5" />
                </a>
            </div>
        </app-container>
    </page-content>
</template>