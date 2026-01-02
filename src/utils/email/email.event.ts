import EventEmitter from "events";
import { SendMailOptions } from "nodemailer";
import emailService from "./email.service";

const emailEvent = new EventEmitter();

emailEvent.on(
  "send",
  async ({ from, to, html, subject, text }: SendMailOptions) => {
    return await emailService.transporter.sendMail({
      from,
      to,
      html,
      subject,
      text,
    });
  },
);

export default emailEvent;
