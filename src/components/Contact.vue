<template>
    <section id="contact">
        <div class="flex justify-center items-center flex-col gap-4 md:p-4">
            <div>
                <h3 class="block text-center text-primary font-bold uppercase lg:text-xl ">Contact</h3>
                <h2 class="font-bold text-2xl text-gray-700 text-center lg:text-3xl">
                    Interested in working with me?
                </h2>
            </div>
            
            <form v-on:submit="contactSumbit" class="block w-full max-w-sm">
                <label class="block mt-4" for="name">Name</label>
                <input class="mt-1" id="name" type="text" placeholder="Enter your name" required>

                <label class="block mt-4" for="email">Email</label>
                <input class="mt-1" id="email" type="email" placeholder="Enter your email" required>

                <label class="block mt-4" for="message">Message</label>
                <textarea class="mt-1 h-32 input" id="email" type="email" placeholder="Enter your message" required></textarea>

                <input type="submit" value="Send" class="mt-4 button w-full hover:cursor-pointer">
            </form>
        </div>
    </section>
</template>

<script setup>

function contactSumbit() {
    alert("Sorry, this service isn't available. For business inquiry please send email to adimas0101@gmail.com");
}
</script>