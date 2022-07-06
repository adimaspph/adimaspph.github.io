<template>
    <div class="bg-slate-200 my-16">
        <section id="project" class="py-8">
            <div class="flex justify-center items-center flex-col">
                <h3 class="text-primary font-bold uppercase lg:text-xl">Portfolio</h3>
                <h2 class="font-bold text-2xl py-1 text-gray-700 lg:text-3xl">
                    My Recent Project
                </h2>
                <!-- <p class="text-center text-base">This is a project that I have worked on. I hope you can know me more </p> -->
                <div class="flex flex-wrap">
                    <div class="w-full py-6 sm:px-6 md:w-1/2">
                        <router-link exact to="/brives" class="hover:opacity-80 transition-all">
                            <img class="my-4 rounded-sm" id="project1" src="../assets/project_brives.png" alt="Brive">
                        </router-link>
                            <h5 class="block font-semibold text-lg" for="project1">BRIVES, Online Private Tutoring Booking Website</h5>
                            <p class="">BRIVES is a website for students who want online private tutoring in BTA.</p>
                    </div>
                    <div class="w-full py-6 sm:px-6 md:w-1/2 ">
                        <router-link exact to="/compfest" class="hover:opacity-80 transition-all">
                            <img class="my-4 rounded-sm" id="project1" src="../assets/projectCompfest/compfest-cover.jpg" alt="Brive">
                        </router-link>
                            <h5 class="block font-semibold text-ls" for="project1">COMPFEST Web Design</h5>
                            <p class="">COMPFEST is the biggest student-led IT event in Indonesia.</p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
    
</template>