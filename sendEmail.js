const nodemailer = require('nodemailer');

// Create an SMTP transporter object
const transporter = nodemailer.createTransport({

    // Host of the SMTP server
    host: 'smtp.ethereal.email',
    // Port of the SMTP server
    port: 587,
    // Authentication Required
    auth: {
        // User of the SMTP server
        user: 'maxwell.roob56@ethereal.email',
        // Password of the SMTP server
        pass: 'UnK4Xph8E9BPNsYXvk',
    },

});

// Send a single email
async function sendEmail(news, email) {

    try {

        // Message object
        await transporter.sendMail({

            // Email from
            from: '"Maxwell Roob" <maxwell.roob56@ethereal.email>',
            // Email to
            to: email,
            // Subject of the email
            subject: news.title,
            // HTML format of the email
            text: news.summary,

        });

        // Return message
        return true;

    } catch (err) {

        // Return error
        return false;

    }

}

module.exports = sendEmail;