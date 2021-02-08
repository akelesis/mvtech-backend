<template>
  <div id="app">
    <Section :color="'#101838'">
      <img :src="companyLogo" alt="Logo da empresa" id="mvtech-logo" />
    </Section>
    <Menu />
    <Section id="about">
      <div class="about-container">
        <div class="about-icon">
          <div class="about-icon-container">
            <img src="./assets/icons/computer.png" alt="Computer Icon" />
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
          <h3>PWA</h3>
          <p>
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
          <img src="./assets/icons/world.svg" alt="Globe Icon" />
          <img src="./assets/icons/laptop.svg" alt="Laptop Icon" />
          <img src="./assets/icons/tablet.svg" alt="Tablet Icon" />
          <img src="./assets/icons/storage.svg" alt="Storage Icon" />
          <img src="./assets/icons/cogs.svg" alt="Gears Icon" />
          <img src="./assets/icons/paint.svg" alt="Paint Icon" />
        </div>
      </div>
    </Section>
    <Section id="tecnologies" :color="'#79ACDC'">
      <h2>Tecnologias que utilizamos</h2>
      <div class="tecnologies-icons">
        <div>
          <img src="./assets/icons/html.svg" alt="html_icon" />
          <h2>HTML</h2>
        </div>
        <div>
          <img src="./assets/icons/css.svg" alt="css_icon" />
          <h2>CSS</h2>
        </div>
        <div>
          <img src="./assets/icons/javascript.svg" alt="javascript_icon" />
          <h2>JAVASCRIPT</h2>
        </div>
        <div>
          <img src="./assets/icons/react.svg" alt="react_icon" />
          <h2>REACT</h2>
        </div>
        <div>
          <img src="./assets/icons/vue.svg" alt="vue_icon" />
          <h2>VUE</h2>
        </div>
        <div>
          <img src="./assets/icons/node.svg" alt="node_icon" />
          <h2>NODE</h2>
        </div>
        <div>
          <img src="./assets/icons/figma.svg" alt="figma_icon" />
          <h2>FIGMA</h2>
        </div>
      </div>
      <h2>E muitas outras...</h2>
    </Section>
    <Section id="portfolio" :color="'#62788C'">
      <h2>Portfólio</h2>
      <div class="portfolio-container">
        <div class="portfolio-options">
          <button>CONSULBA</button>
          <button class="selected-button">CONEXUTDE</button>
          <button>DoN</button>
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
    </Section>
    <Section id="budget">
      <h2>Solicite um orçamento</h2>
      <div class="budget-container">
        <img
          src="./assets/images/budget.gif"
          alt="Two people playing with a giant coin"
        />
        <form @submit.prevent="">
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
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Section from "./components/Section.vue";
import Footer from "./template/Footer.vue";
import companyLogo from "./assets/images/mvtech.png";

export default {
  name: "App",
  data() {
    return {
      companyLogo,
    };
  },
  components: {
    Menu,
    Section,
    Footer,
  },
};
</script>

<style>
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#mvtech-logo {
  width: 60vw;
}

#tecnologies {
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
}

#tecnologies h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
}

h2 {
  font-weight: lighter;
  font-size: 45px;
}

h3 {
  font-weight: lighter;
  font-size: 40px;
}

p {
  font-size: 20px;
}

input {
  color: #444;
}

textarea {
  color: #444;
}
</style>
