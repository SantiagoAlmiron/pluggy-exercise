const { Schema, model} = require('mongoose')

const QuoteSchema = Schema({
    buy_price: {
        type: String,
        required: [true, 'must have a buy price']
    },
    sell_price: {
        type: String,
        required: [true, 'must have a sell price']
    },
    source: {
        type: String,
        required: [true, 'must have a spurce value']
    },
    created_at: {
        type: Date,
        default: new Date
    }
});

QuoteSchema.methods.toJSON = function() {
    const { __v ,_id, ...quote } = this.toObject();
    quote.uid = _id
    return quote;
}

module.exports = model( 'Quotes', QuoteSchema );