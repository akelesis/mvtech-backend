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
          <h3 v-if="selectedService === 1">Websites</h3>
          <p v-if="selectedService === 1">
            Quer apresentar o seu produto ou serviço? Deseja ter uma aplicação
            que ficará disponível para todo e qualquer aparelho com acesso a
            internet? Eis a sua necessidade, um website. À partir dele, criamos
            um ambiente onde computadores, smartphones, video games, e qualquer
            outro dispositivo conectado à rede possa encontrar você.
          </p>
          <h3 v-if="selectedService === 2">Aplicações Desktop</h3>
          <p v-if="selectedService === 2">
            A melhor solução para quem precisa de um melhor desempenho em
            relação aos websites, e não se importa em abrir mão da
            disponibilidade que os navegadores trazem. Aplicações Desktop
            trazem, além disso, um acesso facilitado à funcionalidades mais
            específicas do computador, como câmera, microfones, etc.
          </p>
          <h3 v-if="selectedService === 3">PWA</h3>
          <p v-if="selectedService === 3">
            Não sabe se precisa de um website ou um aplicativo mobile? Que tal
            um meio termo? PWAs compõem a mais nova solução envolvendo a criação
            de aplicativos, porque funcionam como um híbrido entre websites
            normais e os aplicativos de celular. Construindo um PWA, você terá o
            comportamento e as principais vantagens de um aplicativo mobile, mas
            com a mesma disponibilidade de um website.
          </p>
          <h3 v-if="selectedService === 4">Business Intelligence</h3>
          <p v-if="selectedService === 4">
            Se for de sua vontade construir um negócio com vantagens
            competitivas no mercado e estabilidade a longo prazo, Business
            Intelligence se faz essencial. Desenvolvemos ferramentas que irão
            auxiliar no recolhimento e na gestão de todo e qualquer dado que
            possa vir a ser importante para ter um maior controle dos setores de
            sua empresa.
          </p>
          <h3 v-if="selectedService === 5">Manutenção</h3>
          <p v-if="selectedService === 5">
            Se tem um projeto que foi criado há um tempo, e ele começou a
            apresentar problemas ou mesmo ficou muito datado, não
            necessariamente ele precisa ser descartado.
          </p>
          <h3 v-if="selectedService === 6">Desenvolvimento de Layouts</h3>
          <p v-if="selectedService === 6">
            Caso tenha uma ideia e sinta que se faz necessário um protótipo da
            mesma, sua ideia pode vir à vida partindo de um layout não
            funcional. É o meio mais simples e rápido de se obter algo
            apresentável para terceiros.
          </p>
        </div>
        <div class="services-grid">
          <div
            @click="handleService(1)"
            :class="selectedService === 1 ? 'selected' : ''"
          >
            <font-awesome-icon class="service-icon" icon="globe" />
          </div>
          <div
            @click="handleService(2)"
            :class="selectedService === 2 ? 'selected' : ''"
          >
            <font-awesome-icon class="service-icon" icon="laptop" />
          </div>
          <div
            @click="handleService(3)"
            :class="selectedService === 3 ? 'selected' : ''"
          >
            <font-awesome-icon class="service-icon" icon="tablet-alt" />
          </div>
          <div
            @click="handleService(4)"
            :class="selectedService === 4 ? 'selected' : ''"
          >
            <font-awesome-icon class="service-icon" icon="server" />
          </div>
          <div
            @click="handleService(5)"
            :class="selectedService === 5 ? 'selected' : ''"
          >
            <font-awesome-icon class="service-icon" icon="cogs" />
          </div>
          <div
            @click="handleService(6)"
            :class="selectedService === 6 ? 'selected' : ''"
          >
            <font-awesome-icon class="service-icon" icon="palette" />
          </div>
        </div>
      </div>
    </Section>
    <Section id="tecnologies" :color="'#79ACDC'">
      <h2>Tecnologias que utilizamos</h2>
      <div class="tecnologies-icons">
        <div>
          <img
            src="../assets/icons/html.svg"
            alt="html_icon"
            class="html_icon"
          />
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
          <img
            src="../assets/icons/node.svg"
            alt="node_icon"
            class="node_icon"
          />
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
            Sistema web de consultas online, que visa ajudar na demanda da
            COVID-19
          </p>
        </div>
        <div v-if="selectedPortfolio === 2" class="portfolio-content">
          <h3>CONEXTUDE</h3>
          <p>
            O projeto visa facilitar a relação entre escolas e seus alunos,
            criando um ambiente na web onde o colégio pode ter controle de suas
            informações, professores podem mandar recados, exercícios e
            materiais de apoio, e alunos podem ter um melhor controle de como
            vão os seus estudos.
          </p>
        </div>
        <div v-if="selectedPortfolio === 3" class="portfolio-content">
          <h3>DoN</h3>
          <p>
            O DoN é um sistema web na área de nutrição e desenvolvido no ano de
            2020. As principais funcionalidades do sistema são o cadastro e
            acompanhamento clínico dos pacientes.
          </p>
        </div>
      </div>
    </Section>
    <Section id="budget">
      <h2>Solicite um orçamento</h2>
      <div class="budget-container">
        <div>
          <lottie-animation
            path="./budget.json"
            :autoPlay="true"
            alt="Two people playing with a giant coin"
          />
        </div>
        <!-- <img
          src="../assets/images/budget.gif"
          alt="Two people playing with a giant coin"
        /> -->
        <form @submit.prevent="handleFormSubmit()">
          <span
            >Deixe aqui o seu contato e algumas informações básicas sobre a
            ideia do seu projeto que entraremos em contato o mais rápido
            possível para pensar um orçamento compatível com a sua
            necessidade!</span
          >
          <label for="name">Nome Completo</label>
          <input type="text" name="name" v-model="formData.name" />
          <label for="email">E-Mail</label>
          <input type="text" name="email" v-model="formData.email" />
          <label for="phone">Telefone (Whatsapp)</label>
          <input type="text" name="phone" v-model="formData.phone" />
          <label for="message">Deixe sua mensagem</label>
          <textarea name="message" v-model="formData.message"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Section>
  </div>
</template>

<script>
import Section from "../components/Section";
import { emailUrl } from "../config";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  name: "Content",
  data() {
    return {
      selectedService: 3,
      selectedPortfolio: 1,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  components: {
    Section,
    LottieAnimation,
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
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData),
      };

      fetch(emailUrl, requestOptions)
        .then(() => {
          alert("Obrigado, entraremos em contato em breve :)");
        })
        .catch(() => {
          alert(
            "Não foi possível realizar a solicitação no momento, tente mais tarde."
          );
        });
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
</style>
