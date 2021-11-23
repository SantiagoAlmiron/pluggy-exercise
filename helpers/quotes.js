const puppeteer = require('puppeteer');

const scrapPage = async(e) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(e.url);
    const buyPrice = await page.$eval(e.buyPath, el => el.innerText);
    const sellPrice = await page.$eval(e.sellPath, el => el.innerText);
    await browser.close();
    return {
        buy_price: buyPrice,
        sell_price: sellPrice,
        source: e.url
    };
}

module.exports = {
    scrapPage
}