import { Person } from "../../db/entities/persons";
import { authenticatePerson, findPersons } from "../persons";

jest.mock("typeorm");

describe("persons repository", () => {
  it("should authenticate a person", async () => {
    // arrange
    const existingPerson = new Person("mock@test.com", "mock_password");

    // act
    const result = await authenticatePerson(existingPerson);

    // assert
    expect(result).toBeDefined();
    expect(result?.id).toBeDefined();
  });

  it("should list persons", async () => {
    // arrange

    // act
    const result = await findPersons();

    // assert
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it.todo("should add a new person");

  it.todo("should find a person by id");

  it.todo("should edit a person");

  it.todo("should remove a person");
});
