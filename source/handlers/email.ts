import { Handler, Request, Response, NextFunction } from "express";
import {
  sendEmailUsingAnSMTPServer,
  sendMailUsingGmail,
  sendEmailUsingASaaS,
} from "../services/email";

const emailHandler: Handler = async (req: Request, res: Response) => {
  const { method } = req.query;
  try {
    if (method === "smtp") {
      await sendEmailUsingAnSMTPServer();
    } else if (method === "gmail") {
      await sendMailUsingGmail();
    } else if (method === "saas") {
      await sendEmailUsingASaaS();
    } else {
      res.end("Test email was not send.");
    }
    res.send(`Test email sended.`);
  } catch (error: any) {
    console.error(error);
    res.status(500);
    res.end("Failed to send test email.");
  }
};

export { emailHandler };
