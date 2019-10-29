"use strict";

const EmailService = require("../service/EmailService");

module.exports = class EmailController {
    static async sendEmail(req, res) {
        try {
            if (!req.body.from) 
                res.status(400).send("Email é obrigatório");
            let email = await EmailService.sendEmail(req.body);
            return res.send(email.data).status(email.status)
        } catch (error) {
            global.logger.error(error);
            return res.status(error.status).json(error.data);
        }
    } // sendEmail()
} // class