const express = require('express');
const bodyParser = require('body-parser');
const storage = require('node-persist');
const sendEmail = require('./sendEmail');
const axios = require('axios').default;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/notice', async (req, res) => {

    let news;

    // Get news from the API
    await storage.init();

    // Check if the news is already in the storage
    news = await storage.getItem("news");

    // Validate the request
    if (news === undefined) {
        await storage.setItem('news', []);
        news = await storage.getItem("news");
    }

    let id = 0;

    // Check if the news is already in the storage
    if (news.length) {
        id = news[(news.length) - 1].id;
        id++;
    }

    // Add the new news to the storage
    news.push({
        id: id,
        title: req.body.title,
        summary: req.body.summary,
        url: req.body.url
    });

    // Save the news in the storage
    await storage.updateItem('news', news);

    // Send the notice
    res.send("Good News ;) Success!");

});

app.get('/notice', async (req, res) => {

    // Get the news from the storage
    await storage.init();

    // Get the news from the storage
    const news = await storage.getItem("news");
    res.send(news);

});

app.get('/notice/:id', async (req, res) => {

    // Get the news from the storage
    let id = parseInt(req.params.id);

    await storage.init();

    // Get the news from the storage
    const news = await storage.getItem("news");

    // Check if the news is already in the storage
    if (news === undefined) {
        res.status(400).send("News List is Empty!");
    } else {
        let notice = news.find(notice => notice.id === id);
        if (notice === undefined) res.status(400).send("Nothing new here! ;)");

        res.send(notice);
    }

});

app.post('/subscription', async (req, res) => {

    let emails;

    // Get the subscription from the storage
    await storage.init();

    // Check if the subscription is already in the storage
    emails = await storage.getItem("emails");

    // Validate the request
    if (emails === undefined) {
        await storage.setItem('emails', []);
        emails = await storage.getItem("emails");
    }

    // Add the new subscription to the storage
    emails = await storage.getItem("emails");

    const email = req.body.email;

    emails.push(email);

    // Save the subscription in the storage
    await storage.updateItem('emails', emails);

    res.send("Subscribed!");

});

app.put('/send/:id', async (req, res) => {

    // Request ID
    const id = parseInt(req.params.id);

    // Initialize the storage
    await storage.init();

    // Get the emails from the storage
    const emails = await storage.getItem("emails");

    // Check if the emails is already in the storage
    if (emails === undefined) res.status(400).send("No Subscribed Emails!");

    axios.get('http://localhost:3000/notice/' + id).then(response => {

        const notice = response.data;

        let count = 0;

        // Send the News
        var interval = setInterval(() => {
            sendEmail(notice, emails[count]);
            console.log("(Wait) Sending to " + emails[count] + "...");
            count++;
            if (count === emails.length) {
                clearInterval(interval);
                console.log("\nDone!\n");

                res.send(emails);
            }
        }, 2000);

    }).catch(err => {
        res.status(400).send("Nothing new here! ;)");
    });

});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});