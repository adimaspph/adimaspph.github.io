<template>
    <header v-on:scroll="" class="bg-transparent w-full justify-between top-0 left-0 z-100 items-center absolute">
        <!-- container header -->
        <div class="container">
            <div class="flex items-center justify-between relative">
                <!-- Logo Container -->
                <div class="md:px-4">
                    <a href="#home" class="font-bold text-2xl block py-4 text-primary">
                        Adimas
                    </a>
                </div>

                <!-- Logo Container -->
                <div class="px-4 flex justify-center items-center">
                    <!-- burger button -->
                    <button ref="hamburger" id="btn-hamburger" name="btn-hamburger" type="button" class="block absolute right-1 md:right-4 md:hidden" v-on:click='handler'>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                    <!-- navigation menu -->
                    <nav ref="menu" class="hidden absolute p-5 bg-white shadow-md rounded-lg w-[250px] right-4 top-16 transition-all md:block md:static md:bg-transparent md:w-full md:shadow-none">
                        <ul class="flex gap-4 flex-col font-medium md:flex-row md:gap-10">
                            <li class="group ">
                                <a href="#" class="hover:text-primary transition-all">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-primary transition-all">Menu 2</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const hamburger = ref()
const menu = ref()
function handler() {
    hamburger.value.classList.toggle("hamburger-active")
    menu.value.classList.toggle("hidden")
}


window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("nav-fixed");
    } else {
        header.classList.remove("nav-fixed");
    }
}

</script>