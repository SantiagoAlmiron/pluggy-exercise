const Quote = require("../models/quote");

quotesGet = async(req, res = response) => {

    try {
        const results = await Quote.where().sort({'_id':-1}).limit(3)
        
        res.json(results);
    } catch (error) {
        res.status(400).json({
            msg: `The information requested could not be accessed: ${error}`
        });
    }
}

quotesCreate = async(req, res = response) => {

    try {
        const {buy_price, sell_price, source} = req.body
        const quote = new Quote({
            buy_price: buy_price,
            sell_price: sell_price,
            source: source
        });
        
        await quote.save();

        res.json(quote);
    } catch (error) {
        res.status(400).json({
            msg: `Failed to create a new quote: ${error}`
        });
    }
}

module.exports = {
    quotesGet,
    quotesCreate
}