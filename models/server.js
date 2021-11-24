const express = require('express')

class Server {

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

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