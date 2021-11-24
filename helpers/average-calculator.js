const averageCalculator = async(data) => {

	sell_prices= [];
	buy_prices= [];

	data.forEach( (obj) => {
			sell_prices.push(parseFloat(obj.sell_price.replace("$", "")));
			buy_prices.push(parseFloat(obj.buy_price.replace("$", "")));
	});

	const average = {
		average_sell_price: (sell_prices.reduce((a, b) => a + b, 0)/sell_prices.length).toFixed(2),
		average_buy_price: (buy_prices.reduce((a, b) => a + b, 0)/buy_prices.length).toFixed(2)
	}

	return average
};

module.exports = averageCalculator;