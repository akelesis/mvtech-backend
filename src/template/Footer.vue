<template>
    <div class="footer">
        <div class="contato">
            <p>Nossas redes sociais:</p>
            <div class="contato-icons">
                <img  src="../assets/icons/instagram.svg" alt="insta_icon">
                <img src="../assets/icons/whatsapp.svg" alt="whats_icon">
                <img src="../assets/icons/facebook.svg" alt="face_icon">
            </div>
        </div>
        <div class="copyright">
            <span>Todos os direitos reservados © 2021</span>
            <img id="footer-logo" src="../assets/images/mvtech_footer.svg" alt="footer_logo">
        </div>
    </div>
</template>

<style>
.footer {
    width: 100%;
    height: 200px;
    background: #101838;
    
    display: flex;
    justify-content: row;
}

.contato {
    width: 600px;
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
    flex: 1;
}

.copyright span {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
}
</style>