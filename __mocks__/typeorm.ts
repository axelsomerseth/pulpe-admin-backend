// const typeorm = {
//   Entity: jest.fn(),
//   Column: jest.fn(),
//   PrimaryGeneratedColumn: jest.fn(),
//   ManyToOne: jest.fn(),
//   OneToMany: jest.fn(),
//   JoinColumn: jest.fn(),
//   Relation: jest.fn(),
//   DataSource: jest.fn().mockImplementation(() => {
//     return {
//       getRepository: jest.fn().mockImplementation(() => {
//         return {
//           save: jest.fn(),
//         };
//       }),
//     };
//   }),
// };

import { Category } from "../source/db/entities/categories";

const Entity = jest.fn();
const Column = jest.fn();
const PrimaryGeneratedColumn = jest.fn();
const ManyToOne = jest.fn();
const OneToMany = jest.fn();
const JoinColumn = jest.fn();
const Relation = jest.fn();
const DataSource = jest.fn().mockImplementation(() => {
  return {
    getRepository: jest.fn().mockImplementation(() => {
      return {
        save: jest.fn(),
        find: jest
          .fn()
          .mockImplementation(() => [
            new Category("Mock Category", "Mock Description"),
          ]),
      };
    }),
  };
});

export {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Relation,
  DataSource,
};
