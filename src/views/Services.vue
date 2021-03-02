<template>
  <Section id="services" :color="'#344A5F'">
    <h2>Serviços</h2>
    <div class="services-container">
      <div class="services-content">
        <h3 v-if="selectedService === 1">Websites</h3>
        <p v-if="selectedService === 1">
          Quer apresentar o seu produto ou serviço? Deseja ter uma aplicação que
          ficará disponível para todo e qualquer aparelho com acesso a internet?
          Eis a sua necessidade, um website. À partir dele, criamos um ambiente
          onde computadores, smartphones, video games, e qualquer outro
          dispositivo conectado à rede possa encontrar você.
        </p>
        <h3 v-if="selectedService === 2">Aplicações Desktop</h3>
        <p v-if="selectedService === 2">
          A melhor solução para quem precisa de um melhor desempenho em relação
          aos websites, e não se importa em abrir mão da disponibilidade que os
          navegadores trazem. Aplicações Desktop trazem, além disso, um acesso
          facilitado à funcionalidades mais específicas do computador, como
          câmera, microfones, etc.
        </p>
        <h3 v-if="selectedService === 3">PWA</h3>
        <p v-if="selectedService === 3">
          Não sabe se precisa de um website ou um aplicativo mobile? Que tal um
          meio termo? PWAs compõem a mais nova solução envolvendo a criação de
          aplicativos, porque funcionam como um híbrido entre websites normais e
          os aplicativos de celular. Construindo um PWA, você terá o
          comportamento e as principais vantagens de um aplicativo mobile, mas
          com a mesma disponibilidade de um website.
        </p>
        <h3 v-if="selectedService === 4">Business Intelligence</h3>
        <p v-if="selectedService === 4">
          Se for de sua vontade construir um negócio com vantagens competitivas
          no mercado e estabilidade a longo prazo, Business Intelligence se faz
          essencial. Desenvolvemos ferramentas que irão auxiliar no recolhimento
          e na gestão de todo e qualquer dado que possa vir a ser importante
          para ter um maior controle dos setores de sua empresa.
        </p>
        <h3 v-if="selectedService === 5">Manutenção</h3>
        <p v-if="selectedService === 5">
          Se tem um projeto que foi criado há um tempo, e ele começou a
          apresentar problemas ou mesmo ficou muito datado, não necessariamente
          ele precisa ser descartado.
        </p>
        <h3 v-if="selectedService === 6">Desenvolvimento de Layouts</h3>
        <p v-if="selectedService === 6">
          Caso tenha uma ideia e sinta que se faz necessário um protótipo da
          mesma, sua ideia pode vir à vida partindo de um layout não funcional.
          É o meio mais simples e rápido de se obter algo apresentável para
          terceiros.
        </p>
      </div>
      <div class="services-grid">
        <div
          @click="handleService(1)"
          :class="selectedService === 1 ? 'selected' : ''"
          id="globe-button"
        >
          <i class="fas fa-globe service-icon"></i>
        </div>
        <div
          @click="handleService(2)"
          :class="selectedService === 2 ? 'selected' : ''"
          id="laptop-button"
        >
          <i class="fas fa-laptop service-icon"></i>
        </div>
        <div
          @click="handleService(3)"
          :class="selectedService === 3 ? 'selected' : ''"
          id="tablet-button"
        >
          <i class="fas fa-tablet-alt service-icon"></i>
        </div>
        <div
          @click="handleService(4)"
          :class="selectedService === 4 ? 'selected' : ''"
          id="server-button"
        >
          <i class="fas fa-server service-icon"></i>
        </div>
        <div
          @click="handleService(5)"
          :class="selectedService === 5 ? 'selected' : ''"
          id="cogs-button"
        >
          <i class="fas fa-cogs service-icon"></i>
        </div>
        <div
          @click="handleService(6)"
          :class="selectedService === 6 ? 'selected' : ''"
          id="palette-button"
        >
          <i class="fas fa-palette service-icon"></i>
        </div>
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
.services-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
}

.services-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.services-content h3 {
  margin-bottom: 70px;
}

.services-content p {
  text-align: justify;
  font-size: 25px;
}

.services-grid {
  width: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

/* .services-grid img {
  height: 150px;
  width: 150px;
  background: #273242;
  cursor: pointer;
  padding: 10px;

  transition: opacity 0.2s;
} */

.services-grid div {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 180px;
  width: 180px;
  background: #273242;
  cursor: pointer;
  padding: 10px;
  font-size: 130px;

  transition: opacity 0.2s;
}

.services-grid div:hover {
  opacity: 0.8;
}
.services-grid div.selected {
  background: #6FB6CC;
}

.service-icon {
  color: #6FB6CC;
}
.services-grid div.selected .service-icon {
  color: white;
}


@media (min-width: 1110px) {
  .services-content {
    max-width: 500px;
  }

  .services-grid {
    max-width: 500px;
  }
}

@media (max-width: 1110px) {
  .services-container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .services-grid {
    padding: 20px 0 20px 0;
  }

  .services-grid div {
    width: 20vw;
    height: 20vw;

    font-size: 80px;
  }
}
</style>