<template>
  <div id="app">
    <Section :color="'#101838'">
      <img :src="companyLogo" alt="Logo da empresa" id="mvtech-logo" />
    </Section>
    <Menu />
    <Section id="about" :type="'about'" />
    <Section id="services" :type="'services'" :color="'#344A5F'" />
    <Section id="tecnologies" :type="'tecnologies'" :color="'#79ACDC'" />
    <Section id="portfolio" :type="'portfolio'" :color="'#62788C'" />
    <Section id="budget" :type="'budget'" />
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Section from "./components/Section.vue";
import Footer from "./template/Footer.vue";
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
    Footer,
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}

*,
body {
  max-width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
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

#tecnologies {
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
}

#tecnologies h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
}

h2 {
  font-weight: lighter;
  font-size: 45px;
}

h3 {
  font-weight: lighter;
  font-size: 40px;
}

p {
  font-size: 20px;
}

input {
  color: #444;
}

textarea {
  color: #444;
}
</style>
