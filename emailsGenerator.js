// Emails Generator
const emailsGenerator = () => {

    const emails = []; // Array of emails

    // Generate emails
    for (let i = 1; i <= 7; i++) {

        // Generate email structure
        let email = "user" + i + "@gmail.com";

        // Add email to array
        emails.push(email);

    }

    // Return array of emails
    return emails;

}

module.exports = emailsGenerator;