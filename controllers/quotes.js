const { pagesScrapper } = require("../helpers/quotes");

quotesGet = async(req, res = response) => {

    // Pensar en como mover esto de acá, posible colección de mongo

    try {
        const results = await pagesScrapper();
        console.log(results)
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