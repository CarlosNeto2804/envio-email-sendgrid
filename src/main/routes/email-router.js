"use strict";

const EmailController = require("../controllers/email-controller");

module.exports = class OccupationRoute {

    constructor(app) {
        app.route("/email")
            .post(EmailController.sendEmail)
    }
}