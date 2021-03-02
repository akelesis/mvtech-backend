<template>
  <Section id="portfolio" :color="'#62788C'">
    <h2>Portfólio</h2>
    <div class="portfolio-container">
      <div class="portfolio-options">
        <button
          @click="handlePortfolio(1)"
          :class="selectedPortfolio === 1 ? 'selected-button' : ''"
          id="consulba-button"
        >
          CONSULBA
        </button>
        <button
          @click="handlePortfolio(2)"
          :class="selectedPortfolio === 2 ? 'selected-button' : ''"
          id="conextude-button"
        >
          CONEXTUDE
        </button>
        <button
          @click="handlePortfolio(3)"
          :class="selectedPortfolio === 3 ? 'selected-button' : ''"
          id="don-button"
        >
          DoN
        </button>
      </div>
      <div v-if="selectedPortfolio === 1" class="portfolio-content">
        <h3>CONSULBA</h3>
        <p>
          Sistema web de consultas online, que visa ajudar na demanda da
          COVID-19
        </p>
      </div>
      <div v-if="selectedPortfolio === 2" class="portfolio-content">
        <h3>CONEXTUDE</h3>
        <p>
          O Conextude é uma plataforma online para escolas que visa uma melhor
          experiência para o estudante, professores e coordenação, criando um ambiente 
          virtual amigável e promovendo uma extensão do conhecimento para além das paredes da 
          instituição de ensino.
        </p>
      </div>
      <div v-if="selectedPortfolio === 3" class="portfolio-content">
        <h3>DoN</h3>
        <p>
          O DoN (Data on Nutrition) é um sistema web para clínicas de nutrição que auxilia no 
          acompanhamento nutricional de pacientes, o sistema conta com auto avaliação dos pacientes, 
          recursos para revisão de auto-avaliação pelo médico nutricionista e dashboard de resultados.
        </p>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "../components/Section";

export default {
  name: "Services",
  components: {
    Section,
  },
  data() {
    return {
      selectedPortfolio: 1
    };
  },
  methods: {
   handlePortfolio(value) {
      this.selectedPortfolio = value;
    }
  },
};
</script>

<style>
.portfolio-container {
  width: 100%;
  min-height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
}

.portfolio-options {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.portfolio-options button {
  border: 0;
  background: #273242;
  font-size: 20px;
  cursor: pointer;
  margin: 0 5px 0 5px;
  padding: 30px;
  border: 4px solid #62788c;
  outline: none;

  transition: opacity 0.2s;
}

.portfolio-options button:hover {
  opacity: 0.8;
}

.portfolio-options button:first-child {
  background: #61a2df;
}

.portfolio-options button:nth-child(2) {
  background: #97bee3;
}

.portfolio-options button:nth-child(3) {
  background: #346390;
}

.portfolio-options button.selected-button {
  border: 4px solid #fff;
}

.portfolio-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  animation-name: portfolio;
  animation-duration: 0.5s;
}

.portfolio-content::before {
  animation-name: portfolio;
  animation-duration: 0.5s;
}

@keyframes portfolio {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.portfolio-content h3 {
  margin-bottom: 70px;
  animation-name: portfolio;
  animation-duration: 0.5s;
}

.portfolio-content p {
  text-align: justify;
  animation-name: portfolio;
  animation-duration: 0.5s;
  font-size: 25px;
}

@media (min-width: 1110px) {
  .portfolio-content {
    max-width: 500px;
  }

  .portfolio-options {
    max-width: 500px;
  }
}

@media (max-width: 1110px) {
  .portfolio-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .portfolio-options {
    margin-bottom: 20px;
  }

  .portfolio-options button {
    width: 100%;
    padding: 10px 2px 10px 2px;
  }

  .portfolio-options button.selected-button {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
}
</style>