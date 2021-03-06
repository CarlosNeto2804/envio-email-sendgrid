"use strict";
const SENDGRIG = require("@sendgrid/mail");
module.exports = class EmailService {
  static async sendEmail(bodyEmail) {
    const keyApi = global.config.email.apiKey;
    let pdf = bodyEmail.file.substr(28)
    try {
      SENDGRIG.setApiKey(`${keyApi}`);
      const msg = {
        to:      global.config.email.to,
        from:    bodyEmail.from,
        subject: bodyEmail.assunto,
        html: `<strong>EXEMPLO DE ENVIO:${bodyEmail.from}</strong>
                <div>${bodyEmail.texto}</div>
            `,
        attachments: [
              {
                filename: `Curriculo.pdf`,
                content: pdf,
                type: 'application/pdf',
                disposition: 'attachment'
              }
            ]

      };
       let email = await SENDGRIG.send(msg);
       return email 
       ? {data:"Email enviado com Sucesso!",status:200}
       : { data:"Falha ao enviar email!",status:500}

    } catch (error) {
      console.log(error);
        throw{
            data:"Falha ao enviar email!",
            status:500
        }
    }
  }
};
