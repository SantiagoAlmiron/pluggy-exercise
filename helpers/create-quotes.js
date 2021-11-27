const Quote = require("../models/quote");

const createQuotes = async(results) => {
    let processResults = [];       
    
    results.forEach(async(obj) => {
        const quote = new Quote({
            buy_price: obj.buy_price,
            sell_price: obj.sell_price,
            source: obj.source
        });
        
        processResults.push(quote);
        await quote.save();
    });
    
    return processResults
}

module.exports = {
    createQuotes
}