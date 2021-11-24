//const fetch = require("node-fetch");

const { response } = require("express");
const { pagesScrapper } = require("../helpers/quotes");

const averageGet = async(req, res = response) => {
    
	try {
		results = await pagesScrapper();

		sell_prices= [];
		buy_prices= [];

		results.forEach(obj => {
			sell_prices.push(parseFloat(obj.sell_price.replace("$", "")));
			buy_prices.push(parseFloat(obj.buy_price.replace("$", "")));
		});

		res.json({
			average_sell_price: (sell_prices.reduce((a, b) => a + b, 0)/sell_prices.length).toFixed(2),
			average_buy_price: (buy_prices.reduce((a, b) => a + b, 0)/buy_prices.length).toFixed(2)
		})	
	} catch (error) {
		res.status(400).json({
			msg: `Failure trying to calculate the average for this reasones: ${error}`
		})
	}
 
}

module.exports = {
    averageGet
}