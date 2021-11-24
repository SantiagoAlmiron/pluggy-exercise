const slippagesCalculator = (quotesArray, average) => {

	const slippagesArr = [];

	quotesArray.forEach( obj => {
		slippagesArr.push({
			buy_price_slippage: (parseFloat(obj.buy_price.replace("$", "")) - parseFloat(average.average_buy_price)).toFixed(2),
			sell_price_slippage: (parseFloat(obj.sell_price.replace("$", "")) - parseFloat(average.average_sell_price)).toFixed(2),
			source: obj.source
		});
	});
 
	return slippagesArr
};

module.exports = slippagesCalculator;