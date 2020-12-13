const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dawncronin7@gmail.com',
        subject: 'Welcome to Task Manager',
        text: `Welcome to the app, ${name}! Let me know how everything is going with my app, Enjoy!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dawncronin7@gmail.com',
        subject: 'Sorry to see you go! ',
        text: `Goodbye, ${name}! Let me know if we could have done anything to make you stay!`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}