<template>
  <Section id="tecnologies" :color="'#79ACDC'">
    <h2>Tecnologias que utilizamos</h2>
    <div class="tecnologies-icons">
      <div>
        <img src="../assets/icons/html.svg" alt="html_icon" class="html_icon" />
        <h2>HTML</h2>
      </div>
      <div>
        <img src="../assets/icons/css.svg" alt="css_icon" class="css_icon" />
        <h2>CSS</h2>
      </div>
      <div>
        <img
          src="../assets/icons/javascript.svg"
          alt="javascript_icon"
          class="javascript_icon"
        />
        <h2>JAVASCRIPT</h2>
      </div>
      <div>
        <img
          src="../assets/icons/react.svg"
          alt="react_icon"
          class="react_icon"
        />
        <h2>REACT</h2>
      </div>
      <div>
        <img src="../assets/icons/vue.svg" alt="vue_icon" class="vue_icon" />
        <h2>VUE</h2>
      </div>
      <div>
        <img src="../assets/icons/node.svg" alt="node_icon" class="node_icon" />
        <h2>NODE</h2>
      </div>
      <div>
        <img
          src="../assets/icons/figma.svg"
          alt="figma_icon"
          class="figma_icon"
        />
        <h2>FIGMA</h2>
      </div>
    </div>
    <h2>E muitas outras...</h2>
  </Section>
</template>

<script>
import Section from "../components/Section";

export default {
  name: "Tecnologies",
  components: {
    Section,
  },
  data() {
    return {
      selectedService: 3,
    };
  },
  methods: {
    handleService(value) {
      this.selectedService = value;
    },
  },
};
</script>

<style>
#tecnologies > h2 {
  font-size: 40px;
}

.tecnologies-icons {
  width: 90vw;
  height: 180px;

  display: flex;
  justify-content: space-around;
}

.tecnologies-icons div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.tecnologies-icons div img {
  height: 130px;
  width: 130px;

  transition: width .5s, heigth .5s;
}

.tecnologies-icons div img:hover {
  width: 180px;
  height: 180px;
}

.html_icon:hover {
  filter: brightness(0.5) sepia(1) saturate(100) opacity(0.8)
    drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

.css_icon:hover {
  filter: invert(0.25) sepia(100%) brightness(100%) saturate(70)
    hue-rotate(180deg) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

.javascript_icon:hover {
  filter: invert(0.35) sepia(100%) brightness(100%) saturate(2.5)
    hue-rotate(360deg) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

.react_icon:hover {
  filter: invert(0.25) sepia(100%) brightness(100%) saturate(50)
    hue-rotate(180deg) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

.vue_icon:hover {
  filter: invert(0.25) sepia(100%) brightness(70%) saturate(3) hue-rotate(90deg)
    drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

.node_icon:hover {
  filter: invert(0.25) sepia(100%) brightness(100%) saturate(50)
    hue-rotate(90deg) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

.figma_icon:hover {
  filter: invert(0.25) sepia(100%) brightness(100%) saturate(5)
    hue-rotate(270deg) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
}

@media (max-width: 1110px) {
  .tecnologies-icons {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-top: 15px;
  }
}

@media (max-width: 680px) {
  .tecnologies-icons {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0 20px 0;
  }
}

@media (max-width: 420px) {
  .tecnologies-icons {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px 0 20px 0;
  }

  .tecnologies-icons img {
    margin-bottom: 10px;
  }

  .tecnologies-icons h2 {
    margin-bottom: 20px;
  }
}
</style>