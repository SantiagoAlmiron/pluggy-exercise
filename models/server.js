const express = require('express')

class Server {

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Paths 
        this.paths = {
            quotes: '/api/quotes',
            averages: '/api/averages',
        }
        // Routes
        this.routes(); 

        this.listen();
    }

    middlewares() {

        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use( this.paths.quotes, require('../routes/quotes'));
        this.app.use( this.paths.averages, require('../routes/averages'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Process is running on port", this.port)
        })
    }
}

module.exports = Server;