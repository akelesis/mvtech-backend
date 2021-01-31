<template>
  <section :style="{ 'background-color': color }">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "#3E6A94",
    },
  },
};
</script>

<style scoped>
section {
  height: calc(100vh - 62px);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>