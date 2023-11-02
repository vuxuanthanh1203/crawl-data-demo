const scrapeCategory = async (browser, url) => new Promise(async (resolve, reject) => {
    try {
        let page = await browser.newPage();
        console.log(">> Mở tab mới ...");

        await page.goto(url)
        console.log(">> Truy cập tới: " + url);

        await page.waitForSelector('#webpage')
        console.log(">> Website đã load xong");

        const dataCategory = await page.$$eval('#navbar-menu > ul > li', (els) => {
            categories = els.map(el => {
                return {
                    category: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })

            return categories
        })

        console.log(dataCategory);

        await page.close()
        console.log(">> Đóng browser");
        resolve()

    } catch (error) {
        console.log("Scapper Error: " + error);
        reject(error);
    }
})

module.exports = { scrapeCategory }