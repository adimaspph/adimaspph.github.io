<template>
  <Header></Header>
  <Profile></Profile>
  <AboutMe></AboutMe>
  <Project></Project>
  <Contact></Contact>
  <Footer></Footer>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
    name: "App",
    components: { Header, Profile, AboutMe, Project, Contact, Footer}
}
</script>
