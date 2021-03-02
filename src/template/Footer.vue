<template>
  <div class="footer">
    <div class="contato">
      <p>Nossas redes sociais:</p>
      <div class="contato-icons">
        <button @click="handleRedirect(1)" class="contato-button">
          <img id="insta-icon" src="../assets/icons/instagram.svg" alt="insta_icon" />
        </button>
        <button @click="handleRedirect(2)" class="contato-button">
          <img id="whats-icon" src="../assets/icons/whatsapp.svg" alt="whats_icon" />
        </button>
        <button @click="handleRedirect(3)" class="contato-button">
          <img id="face-icon" src="../assets/icons/facebook.svg" alt="face_icon" />
        </button>
      </div>
    </div>
    <div class="copyright">
      <span>Todos os direitos reservados © 2021</span>
      <img
        id="footer-logo"
        src="../assets/images/mvtech_footer.svg"
        alt="footer_logo"
      />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleRedirect(option) {
      switch(option){
        case 1:
          window.open("https://www.instagram.com/mvtechsolutions/");
          return;
        
        case 2:
          window.open('https://api.whatsapp.com/send?phone=5573991371695&text=Gostaria%20de%20falar%20sobre%20desenvolvimento%20de%20sistema!')
          return;

        case 3:
          window.open("https://www.facebook.com/mvtechsolutions");
          return;
      }
    }
  }
}
</script>

<style>
.footer {
  width: 100%;
  min-height: 200px;
  background: #101838;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.contato {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contato p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
}

.contato-icons {
  width: 200px;

  display: flex;
  justify-content: space-around;
}

.copyright {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright span {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
}

.contato-icons button {
  cursor: pointer;
  height: 50px;
  width: 50px;

  border: 0px;
  border-radius: 5px;

  background: #101838;

  display: flex;
  justify-content: center;
  align-items: center;
}

.contato-icons button:hover {
  background: white;
}

.contato-icons button:hover img {
  filter: invert(1);
  background: black;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 850px) {
  .footer {
    flex-direction: column;
  }

  .contato {
    margin-bottom: 30px;
  }
}

@media (max-width: 620px) {
  .contato {
    padding-top: 30px;
  }

  .copyright {
    flex-direction: column;
    padding-bottom: 30px;
  }

  .copyright * {
    margin: 10px 0 10px 0;
  }

  .copyright span {
    margin: 20px 0 3px 0;
  }
}
</style>