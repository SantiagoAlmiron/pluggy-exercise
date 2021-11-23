const { scrapPage } = require("../helpers/quotes");

quotesGet = async(req, res = response) => {

    // Pensar en como mover esto de acá, posible colección de mongo

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

    try {
        const promises = await pages.map(async(page) => { return await scrapPage(page) });

        const results = await Promise.all(promises);

        res.json(results);
    } catch (error) {
        res.status(400).json({
            msg: `The information requested could not be accessed: ${error}`
        });
    }
}

module.exports = {
    quotesGet,
}