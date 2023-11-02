const scraper = require('./scraper')

const scrapeController = async (browserInstance) => {
    const url = 'https://phongtro123.com/'
    try {
        let browser = await browserInstance
        // Gọi Scraper
        let categories = scraper.scrapeCategory(browser, url)
    } catch (error) {
        console.log("Controller Error: " + error);
    }
}

module.exports = scrapeController