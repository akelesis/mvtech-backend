<template>
  <div id="app">
    <Section :color="'#101838'">
      <img :src="companyLogo" alt="Logo da empresa" id="mvtech-logo" />
    </Section>
    <Menu />
    <Section></Section>
    <Section></Section>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Section from "./components/Section.vue";
import companyLogo from "./assets/images/mvtech.png";

export default {
  name: "App",
  data() {
    return {
      companyLogo,
    };
  },
  components: {
    Menu,
    Section,
  },
};
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#mvtech-logo {
  width: 60vw;
}
</style>
