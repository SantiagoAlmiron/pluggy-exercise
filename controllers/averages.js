const { response } = require("express");

const averageCalculator = require("../helpers/average-calculator");
const { pagesScrapper } = require("../helpers/pages-scrapper");

const averageGet = async(req, res = response) => {
    
	try {
		results = await pagesScrapper();

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