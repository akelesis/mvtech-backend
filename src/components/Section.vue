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
  min-height: calc(100vh - 62px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
}

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

.about-icon {
  max-width: 450px;
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
  justify-content: space-around;
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
  cursor: pointer;
  padding: 10px;

  transition: opacity 0.2s;
}

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

.services-grid div .service-icon path {
  fill: #6FB6CC;
}

.services-grid div.selected {
  background: #6FB6CC;
}
.services-grid div.selected .service-icon path {
  fill: white;
}

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
}

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

@media (min-width: 1110px) {
  .about-icon-container {
    max-width: 300px; /**/
  }

  .about-content {
    max-width: 800px; /**/
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

  .services-grid div {
    width: 20vw;
    height: 20vw;

    font-size: 80px;
  }

  .tecnologies-icons {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-top: 15px;
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
