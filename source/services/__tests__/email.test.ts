import { EmailOptions, EmailSenderSMTP, EmailSenderAPI } from "../email";

jest.mock("nodemailer");
jest.mock("mailgun.js");

describe("email options", () => {
  it("should be defined", () => {
    // arrange
    const emailOptions: EmailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test",
    };

    // act

    // assert
    expect(emailOptions).toBeDefined();
    expect(emailOptions.from).toBeDefined();
    expect(emailOptions.to).toBeDefined();
    expect(emailOptions.subject).toBeDefined();
    expect(emailOptions.textBody).toBeDefined();
  });
});

describe("email service", () => {
  beforeAll(() => {
    process.env.SMTP_HOSTNAME = "mock";
    process.env.SMTP_PORT = "587";
    process.env.SMTP_USERNAME = "mock_user";
    process.env.SMTP_USERNAME = "mock_password";
  });

  it("should send emails", async () => {
    // arrange
    const emailOptions: EmailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test",
    };

    // act
    const emailSender = new EmailSenderSMTP();
    const result = await emailSender.send(emailOptions);

    // assert
    expect(emailSender).toBeDefined();
    expect(result).toBe(true);
  });
});

describe("mailgun email service", () => {
  beforeAll(() => {
    process.env.MAILGUN_API_KEY = "some_api_key";
    process.env.MAILGUN_DOMAIN = "some.domain.email";
  });

  it("should send emails", async () => {
    // arrange
    const emailOptions: EmailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test trough Mailgun API",
    };

    // act
    const emailSender = new EmailSenderAPI();
    const result = await emailSender.send(emailOptions);

    // assert
    expect(emailSender).toBeDefined();
    expect(result).toBe(true);
  });
});
