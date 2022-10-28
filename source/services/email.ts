import nodemailer, {
  Transporter,
  SendMailOptions,
  SentMessageInfo,
} from "nodemailer";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { MailgunMessageData } from "mailgun.js/interfaces/Messages";

// TODO: Make the test first and think about the test logic first.
// TODO: Implement a design pattern in this file: 1 Interface and 3 classes.
// TODO: Factory pattern => https://www.tutorialspoint.com/design_pattern/factory_pattern.htm#
// TODO: Adapter pattern =>
// TODO: Mock nodemailer and other packages in test.

// TODO: pass parameters to this function.
const sendEmailUsingAnSMTPServer = async () => {
  const {
    SMTP_HOSTNAME,
    SMTP_PORT,
    SMTP_USERNAME,
    SMTP_PASSWORD,
    TO_TEST_ADDRESS,
  } = process.env;
  const FROM_TEST_ADDRESS = "axelsomerseth@gmail.com";

  // 1. Create reusable transporter object using a SMTP transport object.
  let transporter: Transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  // 2. Set mail options.
  const mailOptions: SendMailOptions = {
    from: `"Axel Foo 👻" <${FROM_TEST_ADDRESS}>`,
    to: TO_TEST_ADDRESS, // list of receivers
    subject: "Sending Email using Node.js and a SMTP Server",
    text: "Hello world?",
    // html: "<b>Hello world?</b>",
  };

  // 3. Send mail with defined transport object.
  let info: SentMessageInfo = await transporter.sendMail(mailOptions);

  // 4. Log response.
  console.log("Email sent: ", info.response);
};

// TODO: pass parameters to this function.
const sendMailUsingGmail = async () => {
  const { GMAIL_USERNAME, GMAIL_PASSWORD, TO_TEST_ADDRESS } = process.env;

  // 1. First authenticate in the mail service.
  var transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USERNAME,
      pass: GMAIL_PASSWORD,
    },
  });

  // 2. Set mail options.
  var mailOptions: SendMailOptions = {
    from: GMAIL_USERNAME,
    to: TO_TEST_ADDRESS,
    subject: "Sending Email using Node.js and Gmail",
    text: "That was easy!",
    // html: "<b>That was easy!</b>"
  };

  // 3. Send mail with defined transport object.
  let info: SentMessageInfo = await transporter.sendMail(mailOptions);

  // 4. Log response.
  console.debug("Email sent: ", info.response);
};

// TODO: pass parameters to this function.
const sendEmailUsingASaaS = async () => {
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, TO_TEST_ADDRESS } = process.env;
  const FROM_TEST_ADDRESS = "axelsomerseth@gmail.com";

  // 1. First authenticate in the mail service.
  const mailgun = new Mailgun(FormData);
  const mgClient = mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY as string,
  });

  // 2. Set mail options.
  const messageData: MailgunMessageData = {
    from: `"Axel Foo 👻" <${FROM_TEST_ADDRESS}>`,
    to: [`${TO_TEST_ADDRESS as string}`],
    subject:
      "Sending Email using Node.js and a Mail service (SaaS, Mailgun API)",
    text: "Testing some Mailgun awesomness!",
    // html: "<h1>Testing some Mailgun awesomness!</h1>",
  };

  // 3. Send mail with defined transport object.
  let info = await mgClient.messages.create(
    MAILGUN_DOMAIN as string,
    messageData
  );

  // 4. Log response.
  console.debug("Email sent: ", info);
};

export { sendEmailUsingAnSMTPServer, sendMailUsingGmail, sendEmailUsingASaaS };
