const axios = require('axios').default; // Importing Axios
const newsGenerator = require('./newsGenerator'); // Importing News Generator
const emailsGenerator = require('./emailsGenerator'); // Importing Emails Generator

const news = newsGenerator(); // Generating News
const emails = emailsGenerator(); // Generating Emails

addNews(news, 0); // Adding News

// Function to add news
function addNews(news, i) {

    // If the news is not empty
    axios.post('http://localhost:3000/news', news[i]).then(() => {

        i++; // Incrementing Index

        i < news.length ?
            addNews(news, i) :
            console.log('News Added');
        // If the news is not empty, add the news and increment the index
        // if (i < news.length) addNews(news, i); // Recursive Call
        // else console.log('News Added???'); // News Added

    });

}

addEmails(emails, 0); // Adding Emails

// Function to add emails
function addEmails(emails, i) {

    // If the emails is not empty
    axios.post('http://localhost:3000/subscription', {email: emails[i]}).then(() => {

        i++; // Incrementing Index

        i < emails.length ?
            addEmails(emails, i) :
            console.log('Emails Added');
        // If the emails is not empty, add the emails and increment the index
        // if (i < emails.length) addEmails(emails, i); // Recursive Call
        // else console.log('Emails Added???'); // Emails Added

    });

}
