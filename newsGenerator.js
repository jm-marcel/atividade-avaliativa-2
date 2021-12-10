// Single Notice Generator
function generateNews(title, summary, url) {

    // Create the notice...
    return {
        // Notice title
        title: title,
        // Notice summary
        summary: summary,
        // Notice URL
        url: url,

    } // ...by parameters

}

// News Generator
const newsGenerator = () => {

    // Create the news...
    const news = [];

    // Add the news...
    for (let i = 1; i <= 5; i++) {

        // Notice Generation
        let notice = generateNews("News nº" + i, "Summary nº" + i, "URL nº" + i);

        // Add the notice to the news
        news.push(notice);

    }

    // Return the news
    return news;

}

module.exports = newsGenerator;