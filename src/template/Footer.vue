<template>
  <div class="footer">
    <div class="contato">
      <p>Nossas redes sociais:</p>
      <div class="contato-icons">
        <img src="../assets/icons/instagram.svg" alt="insta_icon" />
        <img src="../assets/icons/whatsapp.svg" alt="whats_icon" />
        <img src="../assets/icons/facebook.svg" alt="face_icon" />
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
  /* width: ; */
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright span {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
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