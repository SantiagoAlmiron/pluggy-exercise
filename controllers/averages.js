const { response } = require("express");

const averageCalculator = require("../helpers/average-calculator");
const Quote = require("../models/quote");

const averageGet = async(req, res = response) => {
    
	try {
		const results = await Quote.where().sort({'_id':-1}).limit(3)

		const average = await averageCalculator(results);

		res.json(average);
	} catch (error) {
		res.status(400).json({
			msg: `Failure trying to calculate the average for this reasones: ${error}`
		})
	}
 
}

module.exports = {
    averageGet
}