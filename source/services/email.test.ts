import { EmailSenderSMTP, EmailSenderAPI } from "./email";

jest.mock("nodemailer");
jest.mock("mailgun.js");
jest.mock("./email");

describe("email service", () => {
  it("should send emails", async () => {
    // arrange
    const emailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test",
    };

    // act
    const emailSender = new EmailSenderSMTP();
    await emailSender.send(emailOptions);

    // assert
    expect(emailSender).toBeDefined();
    expect(emailSender.send).toHaveBeenCalledWith(emailOptions);
  });
});

describe("mailgun email service", () => {
  it("should send emails", async () => {
    // arrange
    const emailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test trough Mailgun API",
    };

    // act
    const emailSender = new EmailSenderAPI();
    await emailSender.send(emailOptions);

    // assert
    expect(emailSender).toBeDefined();
    expect(emailSender.send).toHaveBeenCalledWith(emailOptions);
  });
});
