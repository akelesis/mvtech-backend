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
      <h2>Tecnologias que utilizamos</h2>
      <div class="tecnologies-icons">
        <div>
          <img src="./assets/icons/html.svg" alt="html_icon">
          <h2>HTML</h2>
        </div>
        <div>
          <img src="./assets/icons/css.svg" alt="css_icon">
          <h2>CSS</h2>
        </div>
        <div>
          <img src="./assets/icons/javascript.svg" alt="javascript_icon">
          <h2>JAVASCRIPT</h2>
        </div>
        <div>
          <img src="./assets/icons/react.svg" alt="react_icon">
          <h2>REACT</h2>
        </div>
        <div>
          <img src="./assets/icons/vue.svg" alt="vue_icon">
          <h2>VUE</h2>
        </div>
        <div>
          <img src="./assets/icons/node.svg" alt="node_icon">
          <h2>NODE</h2>
        </div>
        <div>
          <img src="./assets/icons/figma.svg" alt="figma_icon">
          <h2>FIGMA</h2>
        </div>
      </div>
      <h2>E muitas outras...</h2>
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

#tecnologies{
  display: flex;
  flex-direction: column;
  
  justify-content: space-around;
  align-items: center;
}

#tecnologies h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
}

.tecnologies-icons {
  width: 80vw;
  height: 170px;

  display: flex;
  justify-content: space-around;
}

.tecnologies-icons div{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tecnologies-icons div img{
  height: 120px;
}

</style>
