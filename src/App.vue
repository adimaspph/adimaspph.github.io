<template>
  <Header></Header>
  <Profile></Profile>
</template>

<script>
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';

export default {
    name: "App",
    components: { Header, Profile }
}
</script>
