<template>
  <Section id="tecnologies" :color="'#79ACDC'">
    <h2>Tecnologias que utilizamos</h2>
    <div class="tecnologies-icons">
      <div>
        <i id="html-icon" class="fab fa-html5 grow-on-hover"></i>
        <h2>HTML</h2>
      </div>
      <div>
        <i id="css-icon" class="fab fa-css3-alt grow-on-hover"></i>
        <h2>CSS</h2>
      </div>
      <div>
        <i id="javascript-icon" class="fab fa-js grow-on-hover"></i>
        <h2>JAVASCRIPT</h2>
      </div>
      <div>
        <i id="react-icon" class="fab fa-react grow-on-hover"></i>
        <h2>REACT</h2>
      </div>
      <div>
        <i id="vue-icon" class="fab fa-vuejs grow-on-hover"></i>
        <h2>VUE</h2>
      </div>
      <div>
        <i id="node-icon" class="fab fa-node-js grow-on-hover"></i>
        <h2>NODE</h2>
      </div>
      <div>
        <i id="figma-icon" class="fab fa-figma grow-on-hover"></i>
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

.grow-on-hover {
  font-size: 150px;
  transition: font-size .5s;
}

.grow-on-hover:hover {
  font-size: 200px;
}

#html-icon:hover {
  color: orangered;

  /* background: white;
  border-radius: 25px;
  padding-left: 15px;
  padding-right: 15px; */

  /* background: rgb(255,255,255); */
  /* background: radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(121,172,220,1) 100%); */
  /* filter: drop-shadow(0 0 0.75rem #fff); */
}
#css-icon:hover {
  color: dodgerblue;

  /* background: white;
  border-radius: 25px;
  padding-left: 15px;
  padding-right: 15px; */
}
#javascript-icon:hover {
  color: yellow;

  /* background: white;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 0px; */
}
#react-icon:hover {
  color: cornflowerblue;

  /* background: white;
  border-radius: 25px;
  padding: 8px 10px; */
}
#vue-icon:hover {
  color: mediumseagreen;

  /* background: white;
  border-radius: 25px;
  padding: 5px 15px; */
}
#node-icon:hover {
  color: green;

  /* background: white;
  border-radius: 25px;
  padding: 10px 15px; */
}
#figma-icon:hover {
  color: blueviolet;

  /* background: white;
  border-radius: 25px;
  padding: 15px 25px; */
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

  .tecnologies-icons i {
    margin-bottom: 10px;
  }

  .tecnologies-icons h2 {
    margin-bottom: 20px;
  }
}
</style>