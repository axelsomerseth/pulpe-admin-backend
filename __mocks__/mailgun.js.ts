const mailgun = jest.fn().mockReturnValue({
  client: jest.fn().mockReturnValue({
    messages: {
      create: jest.fn().mockReturnValue({
        status: 200,
      }),
    },
  }),
});

export default mailgun;
