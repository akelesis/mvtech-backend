module.exports = app => {
    app.route("/email")
        .post(app.api.sendMail.mailOptions)
}