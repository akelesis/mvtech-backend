<template>
  <div class="header-cotainer">
    <Section :color="'#101838'">
      <img :src="companyLogo" alt="Logo da empresa" id="mvtech-logo" />
    </Section>
    <Menu />
  </div>
</template>

<script>
import companyLogo from "./assets/images/mvtech.png";
import Section from "../components/Section";

export default {
  data() {
    return {
      companyLogo,
    };
  },
  components: {
    Section,
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
</style>