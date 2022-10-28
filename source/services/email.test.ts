import { EmailSenderSMTP } from "./email";

describe("email service", () => {
  // happy path
  it("should send emails", () => {
    // arrange
    const emailOptions = {
      from: "Test Username <test@email.test>",
      to: "axelsomerseth@gmail.com",
      subject: "Test email",
      textBody: "This is a test",
    };

    // act
    const emailSender = new EmailSenderSMTP();
    const outcome = emailSender.send(emailOptions);

    // assert
    expect(emailSender).toBeDefined();
    expect(outcome).toBeDefined();
    expect(outcome).toBe(true);
  });
});
