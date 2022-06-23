<template>
  <Header></Header>
  <Profile></Profile>
  <AboutMe></AboutMe>
  <Project></Project>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import Project from './components/Project.vue';

export default {
    name: "App",
    components: { Header, Profile, AboutMe, Project}
}
</script>
