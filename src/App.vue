<template>
  <div id="app">
    <Section :color="'#101838'">
      <img :src="companyLogo" alt="Logo da empresa" id="mvtech-logo" />
    </Section>
    <Menu />
    <Section id="about">
      <h2>Quem Somos</h2>
    </Section>
    <Section id="services" :color="'#344A5F'">
      <h2>Serviços</h2>
    </Section>
    <Section id="tecnologies" :color="'#79ACDC'">
      <h2>Tecnologias</h2>
    </Section>
    <Section id="portfolio" :color="'#62788C'">
      <h2>Portfólio</h2>
    </Section>
    <Section id="budget">
      <h2>Solicite Orçamento</h2>
    </Section>
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
*,
body {
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
</style>
