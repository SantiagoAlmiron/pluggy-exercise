const puppeteer = require('puppeteer');

const scrapPage = async(e) => {
    const browser = await puppeteer.launch({
        headless: true,
        ignoreDefaultArgs: ['--disable-extensions']
    });
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


const pagesScrapper = async() => {
    
    const pages = [
        {
            url: "https://www.ambito.com/contenidos/dolar.html",
            buyPath:"body > main > div.widget-wrapper > div:nth-child(8) > div:nth-child(2) > div > div.d-flex.flex-row.align-items-end.align-items-md-center.w-100 > div.first.m-0.w-auto > span.value.data-compra",
            sellPath:"body > main > div.widget-wrapper > div:nth-child(8) > div:nth-child(2) > div > div.d-flex.flex-row.align-items-end.align-items-md-center.w-100 > div.second.m-0.w-auto > span.value.data-venta"
        },
        {
            url: "https://www.dolarhoy.com",
            buyPath:"#home_0 > div.modulo.modulo_bloque > section > div > div > div > div.tile.is-parent.is-9.cotizacion.is-vertical > div > div.tile.is-parent.is-5 > div > div.values > div.compra > div.val",
            sellPath:"#home_0 > div.modulo.modulo_bloque > section > div > div > div > div.tile.is-parent.is-9.cotizacion.is-vertical > div > div.tile.is-parent.is-5 > div > div.values > div.venta > div.val"
        },
        {
            url: "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB",
            buyPath:"#market-scrll-1 > li > a > span.buy > div > div.buy-value",
            sellPath:"#market-scrll-1 > li > a > span.sell > div > div.sell-value"
        },
    ];


    const promises = await pages.map(async(page) => { return await scrapPage(page) });
    
    const results = await Promise.all(promises);

    return results;
}



module.exports = {
    pagesScrapper
}