const nodemailer = require("nodemailer") 

module.exports = app => {
    const transporter = nodemailer.createTransport({ 
        service: "Gmail", 
        auth: {
            user: "",
            pass: ""
        }
    })

    const mailOptions = (req, res)=>{ 
        const dados = req.body;
        const email = {
            from: "",
            to: "",
            subject: "Formulario MVTech",
            text: "Nome: "+ dados.name +"\nEmail: " + dados.email + "\nTelefone: " + dados.phone + "\nMensagem: " + dados.message
        }

        transporter.sendMail(email, (err, info) => { 
            if (err) {
                return res.status(500).send(err);
            }
            
            res.json(info)
        })
    }
    return { mailOptions }
}