<template>
  <nav :class="isFixed ? 'fixed' : ''">
    <div id="nav-arrow" v-scroll="handleScroll"></div>
    <a href="#about" class="desktop-link">Quem Somos</a>
    <a href="#services" class="desktop-link">Serviços</a>
    <a href="#tecnologies" class="desktop-link">Tecnologias</a>
    <a href="#portfolio" class="desktop-link">Portfólio</a>
    <a href="#budget" class="desktop-link">Solicite Orçamento</a>
    <nav
      class="mobile-navigator"
      v-bind:style="isMobileNavActivated ? 'left: 0;' : 'left: -80vw;'"
    >
      <a href="#about" class="mobile-link" @click="handleMobileNav()"
        >Quem Somos</a
      >
      <a href="#services" class="mobile-link" @click="handleMobileNav()"
        >Serviços</a
      >
      <a href="#tecnologies" class="mobile-link" @click="handleMobileNav()"
        >Tecnologias</a
      >
      <a href="#portfolio" class="mobile-link" @click="handleMobileNav()"
        >Portfólio</a
      >
      <a href="#budget" class="mobile-link" @click="handleMobileNav()"
        >Solicite Orçamento</a
      >
    </nav>
    <div
      class="mobile-opacity"
      v-bind:style="isMobileNavActivated ? 'left: 70vw;' : 'left: -110vw;'"
      @click="handleMobileNav()"
    ></div>
    <button @click="handleMobileNav()">
      <font-awesome-icon icon="bars" id="bars-icon" />
    </button>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isFixed: null,
      isMobileNavActivated: false,
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
    handleMobileNav() {
      this.isMobileNavActivated = !this.isMobileNavActivated;
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
  max-width: 100vw;
  top: 0;
}

#bars-icon {
  font-size: 15pt;
}

.mobile-navigator {
  z-index: 10;
  height: 100vh;
  width: 70vw;
  position: fixed;
  background-color: #f2f2f2;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 5px 0px 5px 5px rgba(0, 0, 0, 0.2);

  transition: left 0.3s;
}

.mobile-navigator .mobile-link {
  color: #27507d;
  font-weight: bold;
  text-align: justify;
  padding-left: 20px;
}

.mobile-navigator .mobile-link:hover {
  background-color: #e2e2e2;
}

.mobile-opacity {
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 5px 0px 5px 10px rgba(0, 0, 0, 0.2);

  transition: left 0.3s;
}

nav {
  height: 62px;
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

button {
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  padding: 17px;
  cursor: pointer;
  transition: opacity 0.2s;
  display: none;
}

button:hover {
  opacity: 0.8;
}

@media (max-width: 860px) {
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  nav a.desktop-link {
    display: none;
  }
}
</style>
