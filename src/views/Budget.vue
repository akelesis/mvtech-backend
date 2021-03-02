<template>
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
      <form @submit.prevent="handleFormSubmit()">
        <span
          >Deixe aqui o seu contato e algumas informações básicas sobre a ideia
          do seu projeto que entraremos em contato o mais rápido possível para
          pensar um orçamento compatível com a sua necessidade!</span
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
</template>

<script>
import Section from "../components/Section";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { emailUrl } from "../config";

export default {
  name: "Services",
  components: {
    Section,
    LottieAnimation
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      }
    };
  },
  methods: {
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
    }
  },
};
</script>

<style>
.budget-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;

  margin-top: 15px;
}

.budget-container div {
  max-width: 600px;
  width: 100%;
  height: min-content;
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
  font-size: 22px;
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
  outline: none;
  padding: 7px;
}

.budget-container form textarea {
  min-width: 100%;
  height: 182px;
  resize: none;
  border: 0;
  font-size: 18px;
  outline: none;
  padding: 7px;
}

.budget-container form button {
  height: 40px;
  background: #4a9af6;
  font-size: 20px;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
  outline: none;

  transition: opacity 0.2s;
}

.budget-container form button:hover {
  opacity: 0.8;
}

.budget-container form button:active {
  opacity: 1;
}

@media (max-width: 1110px) {
  .budget-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>