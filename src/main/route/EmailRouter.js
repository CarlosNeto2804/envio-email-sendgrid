"use strict";

const EmailController = require("../controller/EmailController");

module.exports = class OccupationRoute {

    constructor(app) {
        app.route("/email")
            .post(EmailController.sendEmail)
    }
}