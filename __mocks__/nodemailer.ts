const nodemailer = {
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockReturnValue({
      response: "250 Great success",
    }),
  }),
};

export default nodemailer;
