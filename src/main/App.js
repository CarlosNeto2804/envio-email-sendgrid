"use strict";
if (process.env.NODE_ENV == 'homolog') require('./../../config.homolog.js');
else require('./../../config/config');
require('./services/LoggerService');

const express = require('express');
const cors = require('cors')
const BodyParser = require('body-parser');
const Loader = require('./Loader');
const Server = require('./Server');

class App {

    static async init() {
        let app = new Server();
        app.use(cors())
      
        app.use(BodyParser.json({
            limit: '50mb'
        }));
        app.use(BodyParser.urlencoded({
            limit: '50mb',
            extended: true
        }));

        Loader.loadAll(app);

        app.listen(global.config.port, () => {
            global.logger.success(`API rodando em ${global.config.port}`);
        });

        app.get('/', (req, res) => {
            res.json({
                project: "Api para envio de Emails com SendGrid",
                version: "beta",
                author: "Carlos Alberto Neto"
            });
        })
    }
}

App.init();