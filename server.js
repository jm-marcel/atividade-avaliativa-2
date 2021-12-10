const express = require('express');
const bodyParser = require('body-parser');
const storage = require('node-persist');

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

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});