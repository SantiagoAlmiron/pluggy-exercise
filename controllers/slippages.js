const { response } = require("express");
const averageCalculator = require("../helpers/average-calculator");
const slippagesCalculator = require("../helpers/slippages-calculator");
const Quote = require("../models/quote");

const slippagesGet = async(req, res = response) => {
    try {
        const quotesArr = await Quote.where().sort({'_id':-1}).limit(3)
				
        const average = await averageCalculator(quotesArr);

        res.json(slippagesCalculator(quotesArr, average));
    } catch (error) {
        res.status(400).json({
					msg: `Couldt calculate the slippage for the next reasons: ${error}`
				});
    }
};

module.exports = {
    slippagesGet
};