import { createTransport, SendMailOptions } from "nodemailer";
import emailEvent from "./email.event";

class EmailService {
  public readonly transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  public readonly send = ({
    to,
    from,
    subject,
    text,
    html,
  }: SendMailOptions) => {
    return emailEvent.emit("send", { to, from, subject, text, html });
  };
}
export default new EmailService();
