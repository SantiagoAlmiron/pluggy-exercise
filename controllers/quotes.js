const { createQuotes } = require("../helpers/create-quotes");
const Quote = require("../models/quote");
const QuotesService = require("../servicies/quotes");
quotesGet = async(req, res = response) => {

    // Pensar en como mover esto de acá, posible colección de mongo

    try {
        const results = await Quote.where().sort({'_id':-1}).limit(3)
        
        res.json(results);
    } catch (error) {
        res.status(400).json({
            msg: `The information requested could not be accessed: ${error}`
        });
    }
}

quotesScrap = async(req, res = response) => {

    try {
        const QuoteService = new QuotesService
        const results = await QuoteService.getQuotes();
        const quotes = await createQuotes(results);

        res.json(quotes);
    } catch (error) {
        res.status(400).json({
            msg: `The information requested could not be accessed: ${error}`
        });
    }
}

module.exports = {
    quotesGet,
    quotesScrap
}