const nodemailer = require("nodemailer") 
require("dotenv").config()
const email = process.env.email;
const password = process.env.password;

module.exports = app => {
    const transporter = nodemailer.createTransport({ 
        service: "Gmail", 
        auth: {
            user: email,
            pass: password
        }
    })

    const mailOptions = (req, res)=>{ 
        const dados = req.body;
        const emailData = {
            from: "Contato do Site",
            to: email,
            subject: "Formulario MVTech",
            text: "Nome: "+ dados.name +"\nEmail: " + dados.email + "\nTelefone: " + dados.phone + "\nMensagem: " + dados.message
        }

        transporter.sendMail(emailData, (err, info) => { 
            if (err) {
                return res.status(500).send(err);
            }
            
            res.json(info)
        })
    }
    return { mailOptions }
}