import { getRandomId } from "../source/utils/repository";

const Entity = jest.fn();
const Column = jest.fn();
const PrimaryGeneratedColumn = jest.fn();
const ManyToOne = jest.fn();
const OneToMany = jest.fn();
const JoinColumn = jest.fn();
const Relation = jest.fn();

const save = jest.fn().mockImplementation((input) => {
  input.id = getRandomId();
});
const find = jest.fn().mockReturnValue([
  {
    name: "Mock Name",
    description: "Mock Description",
  },
]);
const findOneBy = jest.fn().mockReturnValue({
  id: getRandomId(),
  name: "Mock Name",
  description: "Mock Description",
});
const DataSource = jest.fn().mockImplementation(() => {
  return {
    getRepository: jest.fn().mockImplementation(() => {
      return {
        save,
        find,
        findOneBy,
        remove: jest.fn(),
      };
    }),
    createQueryRunner: jest.fn().mockReturnValue({
      connect: jest.fn(),
      startTransaction: jest.fn(),
      manager: {
        findOneBy,
        save,
      },
      commitTransaction: jest.fn(),
      rollbackTransaction: jest.fn(),
      release: jest.fn(),
    }),
  };
});
const ILike = jest.fn();

export {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Relation,
  DataSource,
  ILike,
};
