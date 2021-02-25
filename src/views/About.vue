<template>
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
</template>

<script>
import Section from "../components/Section";

export default {
    name: "About",
    components: {
        Section
    }
}
</script>

<style>
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

@media (min-width: 1110px) {
  .about-icon-container {
    max-width: 300px; /**/
  }

  .about-content {
    max-width: 800px; /**/
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
}
</style>