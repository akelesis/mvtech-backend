<template>
  <section :style="{ 'background-color': color }">
    <!-- Section for custom content, like the website header -->

    <slot v-if="type === 'custom'" />

    <!-- Content for the about section -->

    <div class="about-container" v-if="type === 'about'">
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
          necessários para atingirmos a qualidade visada pelos nossos clientes.
        </p>
        <p>
          Buscamos sempre trabalhar com as melhores tecnologias do mercado de
          forma a gerar valor para tudo aquilo que produzimos. É de extrema
          importância para a equipe da MVTech a busca pela evolução e superação
          a cada novo produto idealizado, projetado e executado.
        </p>
        <p>
          Entendemos que o nosso cliente é quem nos inspira a cada dia com novos
          desafios e prezamos pela excelencia na execução dos projetos.
        </p>
      </div>
    </div>

    <!-- Content for the services section -->

    <h2 v-if="type === 'services'">Serviços</h2>
    <div class="services-container" v-if="type === 'services'">
      <div class="services-content">
        <h3>PWA</h3>
        <p>
          PWA é uma tecnologia Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris eget felis eget lacus volutpat malesuada eget
          nec dolor. Fusce condimentum libero a dui commodo pellentesque.
          Aliquam tempor tortor nibh, nec finibus erat faucibus nec. Nullam
          congue non nulla rhoncus feugiat. Ut sed lectus felis. Morbi luctus
          sapien risus, sed rhoncus purus imperdiet non. Nunc accumsan, nulla ac
          blandit dignissim, erat nisl rutrum metus, at cursus libero justo
          dictum dui. Ut facilisis sed velit sit amet tempus.
        </p>
      </div>
      <div class="services-grid">
        <img src="../assets/icons/world.svg" alt="Globe Icon" />
        <img src="../assets/icons/laptop.svg" alt="Laptop Icon" />
        <img src="../assets/icons/tablet.svg" alt="Tablet Icon" />
        <img src="../assets/icons/storage.svg" alt="Storage Icon" />
        <img src="../assets/icons/cogs.svg" alt="Gears Icon" />
        <img src="../assets/icons/paint.svg" alt="Paint Icon" />
      </div>
    </div>

    <!-- Content for the tecnologies section -->

    <h2 v-if="type === 'tecnologies'">Tecnologias que utilizamos</h2>
    <div class="tecnologies-icons" v-if="type === 'tecnologies'">
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
    <h2 v-if="type === 'tecnologies'">E muitas outras...</h2>

    <!-- Content for the portfolio section -->

    <h2 v-if="type === 'portfolio'">Portfólio</h2>
    <div class="portfolio-container" v-if="type === 'portfolio'">
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
          CONEXUTDE
        </button>
        <button
          @click="handlePortfolio(3)"
          :class="selectedPortfolio === 3 ? 'selected-button' : ''"
        >
          DoN
        </button>
      </div>
      <div class="portfolio-content">
        <h3>CONEXTUDE</h3>
        <p>
          O projeto visa facilitar a relação Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Mauris eget felis eget lacus volutpat
          malesuada eget nec dolor. Fusce condimentum libero a dui commodo
          pellentesque. Aliquam tempor tortor nibh, nec finibus erat faucibus
          nec. Nullam congue non nulla rhoncus feugiat. Ut sed lectus felis.
          Morbi luctus sapien risus, sed rhoncus purus imperdiet non. Nunc
          accumsan, nulla ac blandit dignissim, erat nisl rutrum metus, at
          cursus libero justo dictum dui. Ut facilisis sed velit sit amet
          tempus.
        </p>
      </div>
    </div>

    <!-- Content for the budget section -->

    <h2 v-if="type === 'budget'">Solicite um orçamento</h2>
    <div class="budget-container" v-if="type === 'budget'">
      <img
        src="../assets/images/budget.gif"
        alt="Two people playing with a giant coin"
      />
      <form @submit.prevent="handleFormSubmit()">
        <span
          >Deixe aqui o seu contato e algumas informações básicas sobre a ideia
          do seu projeto que entraremos em contato o mais rápido possível para
          pensar um orçamento compatível com a sua necessidade!</span
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
  </section>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {
      selectedService: 3,
      selectedPortfolio: 2,
    };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "#3E6A94",
    },
    type: {
      type: String,
      required: false,
      default: "custom",
    },
  },
  methods: {
    handlePortfolio(value) {
      this.selectedPortfolio = value;
    },
    handleFormSubmit() {
      console.log("Sent!");
    },
  },
};
</script>

<style scoped>
section {
  min-height: calc(100vh - 62px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
}

.tecnologies-icons {
  width: 80vw;
  height: 170px;

  display: flex;
  justify-content: space-around;
}

.tecnologies-icons div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tecnologies-icons div img {
  height: 120px;
}

.about-icon {
  max-width: 580px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-icon-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 20px 0 20px 0;
  background: linear-gradient(180deg, #535353 0%, #141414 100%);
}

.about-icon-container img {
  max-width: 500px;
  width: 90%;
}

.about-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.about-content h2 {
  margin-bottom: 70px;
}

.about-content p {
  font-size: 20px;
  text-align: justify;
  margin-bottom: 30px;
}

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
}

.services-grid {
  width: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.services-grid img {
  height: 150px;
  width: 150px;
  background: #273242;
}

.portfolio-container {
  width: 100%;
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
}

.portfolio-content h3 {
  margin-bottom: 70px;
}

.portfolio-content p {
  text-align: justify;
}

.budget-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
}

.budget-container img {
  max-width: 500px;
  width: 100%;
}

.budget-container form {
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.budget-container form {
  text-align: justify;
}

.budget-container form span {
  font-size: 20px;
  margin-bottom: 30px;
}

.budget-container form label {
  font-size: 20px;
}

.budget-container form input {
  border: 0;
  height: 35px;
  font-size: 18px;
  margin-bottom: 18px;
}

.budget-container form textarea {
  min-width: 100%;
  height: 182px;
  resize: none;
  border: 0;
  font-size: 18px;
}

.budget-container form button {
  height: 40px;
  background: #4a9af6;
  font-size: 20px;
  border: 0;
  margin-top: 20px;
  cursor: pointer;

  transition: opacity 0.2s;
}

.budget-container form button:hover {
  opacity: 0.8;
}

@media (min-width: 1110px) {
  .about-icon-container {
    max-width: 550px;
  }

  .about-content {
    max-width: 500px;
  }

  .services-content {
    max-width: 500px;
  }

  .portfolio-content {
    max-width: 500px;
  }

  .portfolio-options {
    max-width: 500px;
  }

  .services-grid {
    max-width: 500px;
  }
}

@media (max-width: 1110px) {
  .about-icon-container {
    margin-bottom: 30px;
  }

  .about-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .services-container {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .services-grid {
    padding: 20px 0 20px 0;
  }

  .services-grid img {
    width: 20vw;
    height: 20vw;
  }

  .tecnologies-icons {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

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

  .budget-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
