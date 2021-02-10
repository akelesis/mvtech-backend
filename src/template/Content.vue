<template>
  <div class="content-cotainer">
    <Section id="about">
      <div class="about-container">
        <div class="about-icon">
          <div class="about-icon-container">
            <img src="../assets/icons/computer.png" alt="Computer Icon" />
          </div>
        </div>
        <div class="about-content">
          <h2>Quem Somos</h2>
          <p>
            A MVTech surgiu da paixão de amigos por desenvolver soluções
            computacionais para os mais diversos problemas do mundo moderno. E é
            através desta paixão que conseguimos a dedicação e o cuidado
            necessários para atingirmos a qualidade visada pelos nossos
            clientes.
          </p>
          <p>
            Buscamos sempre trabalhar com as melhores tecnologias do mercado de
            forma a gerar valor para tudo aquilo que produzimos. É de extrema
            importância para a equipe da MVTech a busca pela evolução e
            superação a cada novo produto idealizado, projetado e executado.
          </p>
          <p>
            Entendemos que o nosso cliente é quem nos inspira a cada dia com
            novos desafios e prezamos pela excelencia na execução dos projetos.
          </p>
        </div>
      </div>
    </Section>
    <Section id="services" :color="'#344A5F'">
      <h2>Serviços</h2>
      <div class="services-container">
        <div class="services-content">
          <h3 v-if="selectedService === 1">Planeta Terra</h3>
          <p v-if="selectedService === 1">
            PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eget felis eget lacus volutpat malesuada
            eget nec dolor. Fusce condimentum libero a dui commodo pellentesque.
            Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
            congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
            sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla
            ac blandit dignissim, erat nisl rutrum metus, at cursus libero justo
            dictum dui. Ut facilisis sed velit sit amet tempus.
          </p>
          <h3 v-if="selectedService === 2">Computador Xou</h3>
          <p v-if="selectedService === 2">
            PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eget felis eget lacus volutpat malesuada
            eget nec dolor. Fusce condimentum libero a dui commodo pellentesque.
            Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
            congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
            sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla
            ac blandit dignissim, erat nisl rutrum metus, at cursus libero justo
            dictum dui. Ut facilisis sed velit sit amet tempus.
          </p>
          <h3 v-if="selectedService === 3">PWA</h3>
          <p v-if="selectedService === 3">
            PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eget felis eget lacus volutpat malesuada
            eget nec dolor. Fusce condimentum libero a dui commodo pellentesque.
            Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
            congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
            sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla
            ac blandit dignissim, erat nisl rutrum metus, at cursus libero justo
            dictum dui. Ut facilisis sed velit sit amet tempus.
          </p>
          <h3 v-if="selectedService === 4">Armazenamento xou</h3>
          <p v-if="selectedService === 4">
            PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eget felis eget lacus volutpat malesuada
            eget nec dolor. Fusce condimentum libero a dui commodo pellentesque.
            Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
            congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
            sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla
            ac blandit dignissim, erat nisl rutrum metus, at cursus libero justo
            dictum dui. Ut facilisis sed velit sit amet tempus.
          </p>
          <h3 v-if="selectedService === 5">Engenheiros Mecânicos Fora Daqui</h3>
          <p v-if="selectedService === 5">
            PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eget felis eget lacus volutpat malesuada
            eget nec dolor. Fusce condimentum libero a dui commodo pellentesque.
            Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
            congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
            sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla
            ac blandit dignissim, erat nisl rutrum metus, at cursus libero justo
            dictum dui. Ut facilisis sed velit sit amet tempus.
          </p>
          <h3 v-if="selectedService === 6">Paint melhor que Photoshop</h3>
          <p v-if="selectedService === 6">
            PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris eget felis eget lacus volutpat malesuada
            eget nec dolor. Fusce condimentum libero a dui commodo pellentesque.
            Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
            congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
            sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla
            ac blandit dignissim, erat nisl rutrum metus, at cursus libero justo
            dictum dui. Ut facilisis sed velit sit amet tempus.
          </p>
        </div>
        <div class="services-grid">
          <img
            @click="handleService(1)"
            src="../assets/icons/world.svg"
            alt="Globe Icon"
            :class="selectedService === 1 ? 'selected' : ''"
          />
          <img
            @click="handleService(2)"
            src="../assets/icons/laptop.svg"
            alt="Laptop Icon"
            :class="selectedService === 2 ? 'selected' : ''"
          />
          <img
            @click="handleService(3)"
            src="../assets/icons/tablet.svg"
            alt="Tablet Icon"
            :class="selectedService === 3 ? 'selected' : ''"
          />
          <img
            @click="handleService(4)"
            src="../assets/icons/storage.svg"
            alt="Storage Icon"
            :class="selectedService === 4 ? 'selected' : ''"
          />
          <img
            @click="handleService(5)"
            src="../assets/icons/cogs.svg"
            alt="Gears Icon"
            :class="selectedService === 5 ? 'selected' : ''"
          />
          <img
            @click="handleService(6)"
            src="../assets/icons/paint.svg"
            alt="Paint Icon"
            :class="selectedService === 6 ? 'selected' : ''"
          />
        </div>
      </div>
    </Section>
    <Section id="tecnologies" :color="'#79ACDC'">
      <h2>Tecnologias que utilizamos</h2>
      <div class="tecnologies-icons">
        <div>
          <img src="../assets/icons/html.svg" alt="html_icon" />
          <h2>HTML</h2>
        </div>
        <div>
          <img src="../assets/icons/css.svg" alt="css_icon" />
          <h2>CSS</h2>
        </div>
        <div>
          <img src="../assets/icons/javascript.svg" alt="javascript_icon" />
          <h2>JAVASCRIPT</h2>
        </div>
        <div>
          <img src="../assets/icons/react.svg" alt="react_icon" />
          <h2>REACT</h2>
        </div>
        <div>
          <img src="../assets/icons/vue.svg" alt="vue_icon" />
          <h2>VUE</h2>
        </div>
        <div>
          <img src="../assets/icons/node.svg" alt="node_icon" />
          <h2>NODE</h2>
        </div>
        <div>
          <img src="../assets/icons/figma.svg" alt="figma_icon" />
          <h2>FIGMA</h2>
        </div>
      </div>
      <h2>E muitas outras...</h2>
    </Section>
    <Section id="portfolio" :color="'#62788C'">
      <h2>Portfólio</h2>
      <div class="portfolio-container">
        <div class="portfolio-options">
          <button
            @click="handlePortfolio(1)"
            :class="selectedPortfolio === 1 ? 'selected-button' : ''"
          >
            CONSULBA
          </button>
          <button
            @click="handlePortfolio(2)"
            :class="selectedPortfolio === 2 ? 'selected-button' : ''"
          >
            CONEXTUDE
          </button>
          <button
            @click="handlePortfolio(3)"
            :class="selectedPortfolio === 3 ? 'selected-button' : ''"
          >
            DoN
          </button>
        </div>
        <div v-if="selectedPortfolio === 1" class="portfolio-content">
          <h3>CONSULBA</h3>
          <p>
            O projeto visa facilitar a relação consulba consulba consulba
            consulba consulba consulba consulba consulba consulba consulba
            consulba consulba consulba consulba consulba consulba consulba
            consulba consulba consulba.
          </p>
        </div>
        <div v-if="selectedPortfolio === 2" class="portfolio-content">
          <h3>CONEXTUDE</h3>
          <p>
            O projeto visa facilitar a relação conextude conextude conextude
            conextude conextude conextude conextude conextude conextude
            conextude conextude conextude conextude conextude conextude
            conextude conextude conextude conextude.
          </p>
        </div>
        <div v-if="selectedPortfolio === 3" class="portfolio-content">
          <h3>DoN</h3>
          <p>
            O projeto visa facilitar a relação Don Don Don Don Don Don Don Don
            Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don
            Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don
            Don Don Don Don Don Don Don Don Don Don Don Don Don Don.
          </p>
        </div>
      </div>
    </Section>
    <Section id="budget">
      <h2>Solicite um orçamento</h2>
      <div class="budget-container">
        <img
          src="../assets/images/budget.gif"
          alt="Two people playing with a giant coin"
        />
        <form @submit.prevent="handleFormSubmit()">
          <span
            >Deixe aqui o seu contato e algumas informações básicas sobre a
            ideia do seu projeto que entraremos em contato o mais rápido
            possível para pensar um orçamento compatível com a sua
            necessidade!</span
          >
          <label for="name">Nome Completo</label>
          <input type="text" name="name" />
          <label for="email">E-Mail</label>
          <input type="text" name="email" />
          <label for="phone">Telefone (Whatsapp)</label>
          <input type="text" name="phone" />
          <label for="message">Deixe sua mensagem</label>
          <textarea name="message"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from "../components/Section";

export default {
  name: "Content",
  data() {
    return {
      selectedService: 3,
      selectedPortfolio: 1,
    };
  },
  components: {
    Section,
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "#3E6A94",
    },
  },
  methods: {
    handlePortfolio(value) {
      this.selectedPortfolio = value;
    },
    handleService(value) {
      this.selectedService = value;
    },
    handleFormSubmit() {
      console.log("Sent!");
    },
  },
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
