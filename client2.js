const axios = require('axios').default; // Importing Axios

// Creating a new instance of Axios
axios.get('http://localhost:3000/news').then(res => {

    const news = res.data; // Getting the data from the response

    // News Data
    news.forEach(notice => {
        console.log("ID: " + notice.id);
        console.log("Title: " + notice.title);
        console.log("Summary: " + notice.summary);
        console.log("URL: " + notice.url);
        console.log("\n");
    });

    const notice = news[news.length - 1]; // Getting the last notice

    // Notice Data
    axios.put('http://localhost:3000/send/' + notice.id).then(() => {
        // Sending the notice
        console.log("ID " + notice.id + " news has been sent!"); // Sending the last notice

    });

});