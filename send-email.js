const nodemailer = require('nodemailer');

async function sendEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL, // Me l'envie a mi mateixa.
        subject: 'Resultat del workflow executat',
        text: `
        S'ha realitzat un push en la branca main que ha provocat l'execució del workflow "nodejs-blog-practica-main_workflow" amb els següents resultats:

        linter_job: ${process.env.LINTER_RESULT}
        cypress_job: ${process.env.CYPRESS_RESULT}
        add_badge_job: ${process.env.ADD_BADGE_RESULT}
        deploy_job: ${process.env.DEPLOY_RESULT}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correu enviat satisfactòriament");
    } catch (error) {
        console.error("Error en l'enviament del correu: ", error);
    }
}

sendEmail();
