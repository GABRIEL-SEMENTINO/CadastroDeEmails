import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
const nodemailer = require ("nodemailer");

@Injectable()
export class RemententeService {

  @Cron('25 * * * * *')
  async sendMail() {


    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.email", 
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'email@email.com',
        pass: 'email12345',
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'from@email.com', // sender address
      to: "to@email.com", // list of receivers
      subject: "Node test send mail", // Subject line
      text: "Hello! I've been trying to send e-mails with Node.js", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

}
