<template>
  <nav :class="isFixed ? 'fixed' : ''">
    <div id="nav-arrow" v-scroll="handleScroll"></div>
    <a href="#about">Quem Somos</a>
    <a href="#services">Serviços</a>
    <a href="#tecnologies">Tecnologias</a>
    <a href="#portfolio">Portfólio</a>
    <a href="#budget">Solicite Orçamento</a>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isFixed: null,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= window.innerHeight - 45) {
        this.isFixed = true;
        return;
      }

      this.isFixed = false;
    },
  },
};
</script>

<style scoped>
#nav-arrow {
  position: absolute;
  top: -31.5px;
  left: calc(100vw / 2 - 50px);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 31.5px 50px;
  border-color: transparent transparent #27507d transparent;
}

.fixed {
  position: fixed;
  top: 0;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: space-evenly;
  width: 100%;
  background: #27507d;
}

nav a {
  width: 100%;
  font-family: "Open Sans", Ubuntu;
  font-size: 14pt;
  color: #fff;
  padding: 20px 5px 20px 5px;
  text-decoration: none;

  transition: background-color 0.2s;
}

nav a:hover {
  background: #193452;
}
</style>
