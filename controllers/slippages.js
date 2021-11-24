const { response } = require("express");
const averageCalculator = require("../helpers/average-calculator");
const { pagesScrapper } = require("../helpers/pages-scrapper");
const slippagesCalculator = require("../helpers/slippages-calculator");

const slippagesGet = async(req, res = response) => {

    try {
        const quotesArr = await pagesScrapper();
				
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