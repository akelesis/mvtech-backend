<template>
  <div class="content-cotainer">
    <About />
    <Services />
    <Tecnologies />
    <Portfolio />
    <Budget />
  </div>
</template>

<script>
import About from "../views/About";
import Services from "../views/Services";
import Tecnologies from "../views/Tecnologies";
import Portfolio from '../views/Portfolio.vue';
import Budget from '../views/Budget.vue';

export default {
  name: "Content",
  components: {
    About,
    Services,
    Tecnologies,
    Portfolio,
    Budget
  }
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
