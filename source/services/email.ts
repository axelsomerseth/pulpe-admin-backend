import nodemailer, {
  Transporter,
  SendMailOptions,
  SentMessageInfo,
} from "nodemailer";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { MailgunMessageData } from "mailgun.js/interfaces/Messages";
import Client from "mailgun.js/client";

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  textBody?: string;
  htmlBody?: string;
  attachments?: unknown[];
  cc?: string;
  bcc?: string;
}

interface EmailSender {
  send(emailOptions: EmailOptions): Promise<boolean>;
}

class EmailSenderSMTP implements EmailSender {
  SMTP_HOSTNAME: string;
  SMTP_PORT: number;
  SMTP_USERNAME: string;
  SMTP_PASSWORD: string;
  transporter: Transporter;

  constructor() {
    this.SMTP_HOSTNAME = process.env.SMTP_HOSTNAME as string;
    this.SMTP_PORT = process.env.SMTP_PORT as unknown as number;
    this.SMTP_USERNAME = process.env.SMTP_USERNAME as string;
    this.SMTP_PASSWORD = process.env.SMTP_PASSWORD as string;

    this.transporter = nodemailer.createTransport({
      host: this.SMTP_HOSTNAME,
      port: this.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.SMTP_USERNAME,
        pass: this.SMTP_PASSWORD,
      },
    });
  }

  async send(emailOptions: EmailOptions): Promise<boolean> {
    const mailOptions: SendMailOptions = {
      from: emailOptions.from,
      to: emailOptions.to,
      subject: emailOptions.subject,
      text: emailOptions.textBody,
    };

    let info: SentMessageInfo = await this.transporter.sendMail(mailOptions);
    console.debug("Email sent: ", info);
    return info.response === "250 Great success";
  }
}

class EmailSenderAPI implements EmailSender {
  MAILGUN_API_KEY: string;
  MAILGUN_DOMAIN: string;
  mailgun: Mailgun;
  mgClient: Client;

  constructor() {
    this.MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string;
    this.MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string;

    this.mailgun = new Mailgun(FormData);
    this.mgClient = this.mailgun.client({
      username: "api",
      key: this.MAILGUN_API_KEY,
    });
  }

  async send(emailOptions: EmailOptions): Promise<boolean> {
    const messageData: MailgunMessageData = {
      from: emailOptions.from,
      to: [emailOptions.to],
      subject: emailOptions.subject,
      text: emailOptions.textBody as string,
      html: emailOptions.htmlBody as string,
    };

    let info = await this.mgClient.messages.create(
      this.MAILGUN_DOMAIN as string,
      messageData
    );
    console.debug("Email sent: ", info);
    return info.status === 200;
  }
}

export { EmailOptions, EmailSender, EmailSenderSMTP, EmailSenderAPI };
