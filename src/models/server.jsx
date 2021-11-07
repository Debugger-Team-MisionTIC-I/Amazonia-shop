const express = require('express');


class Server {
    constructor() {
        this.app = express();
        this.port = 8080 //process.env.PORT
        this.usuariosPath = 'api/usuarios';


       //middlewares()
       this.middleware();
       


       //rutas de la APP
       this.routes();

    }

    middleware() {


        //CORS


        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico

        this.app.use(express.static('public'));

    }


    routes() {
        this.app.use(`/${this.usuariosPath}`, require('./routes/usuarios'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}


module.exports = Server;
