const express = require('express');
const { dbConnection } = require('../database/config');
const cron = require('node-cron');
const QuotesService = require('../servicies/quotes');
const { createQuotes } = require('../helpers/create-quotes');

class Server {

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;

        // Database
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Schedule works
        this.updateQuotes();

        // Paths 
        this.paths = {
            averages: '/api/averages',
            slippage: '/api/slippages',
            quotes:   '/api/quotes',
        }
        // Routes
        this.routes(); 

        this.listen();
    }

    async updateQuotes() {
        cron.schedule("*/60 * * * * *", async() => {

            try {
                const QuoteService = new QuotesService
                const results = await QuoteService.getQuotes();
                await createQuotes(results);
                
                console.log('Quoes creadas con exito')
            } catch (error) {
                console.log(error)
            }
        });

    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use( this.paths.averages, require('../routes/averages'));
        this.app.use( this.paths.slippage, require('../routes/slippages'));
        this.app.use( this.paths.quotes, require('../routes/quotes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Process is running on port", this.port)
        })
    }
}

module.exports = Server;