import { EmailSenderSMTP } from "./email";
// import { config } from "dotenv";
// config();

jest.mock("nodemailer");
jest.mock("./email");

describe("email service", () => {
  // happy path
  it("should send emails", async () => {
    // arrange
    const emailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test",
    };

    console.log(process.env);

    // act
    const emailSender = new EmailSenderSMTP();
    await emailSender.send(emailOptions);

    // assert
    expect(emailSender).toBeDefined();
    expect(emailSender.send).toHaveBeenCalledWith(emailOptions);
  });
});
