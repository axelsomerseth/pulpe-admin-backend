const AppDataSource = jest.fn(() => {
  return jest.fn(() => ({
    getRepository: jest.fn(() => {
      return {
        save: jest.fn(),
        find: jest.fn(),
        findOneBy: jest.fn(),
        remove: jest.fn(),
      };
    }),
  }));
});

export { AppDataSource };
