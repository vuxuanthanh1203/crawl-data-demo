const scrapers = require('./scraper')
const fs = require('fs')

const scrapeController = async (browserInstance) => {
    const url = 'https://phongtro123.com/'
    const indexs = [1, 2, 3, 4]
    try {
        const browser = await browserInstance
        // Gọi Scraper
        const categories = await scrapers.scrapeCategory(browser, url)
        const selectedCategories = categories.filter((category, index) => indexs.some(i => i === index))

        const result1 = await scrapers.scraper(browser, selectedCategories[0].link)
        fs.writeFile('chothuephongtro.json', JSON.stringify(result1), 'utf8', (err) => {
            if (err) {
                console.log('Ghi data thất bại' + err)
            }
            console.log('Ghi data thành công');
        })
        const result2 = await scrapers.scraper(browser, selectedCategories[1].link)
        fs.writeFile('nhachothue.json', JSON.stringify(result2), 'utf8', (err) => {
            if (err) {
                console.log('Ghi data thất bại' + err)
            }
            console.log('Ghi data thành công');
        })
        const result3 = await scrapers.scraper(browser, selectedCategories[2].link)
        fs.writeFile('chothuecanho.json', JSON.stringify(result3), 'utf8', (err) => {
            if (err) {
                console.log('Ghi data thất bại' + err)
            }
            console.log('Ghi data thành công');
        })
        const result4 = await scrapers.scraper(browser, selectedCategories[3].link)
        fs.writeFile('chothuematbang.json', JSON.stringify(result4), 'utf8', (err) => {
            if (err) {
                console.log('Ghi data thất bại' + err)
            }
            console.log('Ghi data thành công');
        })
        await browser.close()

    } catch (error) {
        console.log("Controller Error: " + error);
    }
}

module.exports = scrapeController