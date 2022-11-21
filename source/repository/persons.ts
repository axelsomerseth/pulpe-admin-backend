import { Person } from "../db/entities/persons";
import { AppDataSource } from "../db/connection";

const personRepository = AppDataSource.getRepository(Person);
// TODO: remove this testPersons thing.
const testPersons: Person[] = [
  {
    id: 1,
    uuid: "",
    username: "test",
    password: "test",
    firstName: "Test",
    lastName: "User",
  },
];

const authenticatePerson = async (person: Person): Promise<Person | null> => {
  // TODO: pass the password through a hash function.
  // const authenticatedPerson = await personRepository.findOneBy({
  //   username: person.username,
  //   password: person.password,
  // });

  const authenticatedPerson = testPersons.find(
    (p) => p.username === person.username && p.password === person.password
  );

  if (!authenticatedPerson) return null;

  // Returning the person/user without password.
  // authenticatedPerson.password = "";
  return authenticatedPerson;
};

const findPersons = async (): Promise<Person[]> => {
  // const results = await personRepository.find();
  // TODO: remove this and implement repository.
  const results = testPersons;
  return results;
};

const addPerson = async (person: Person): Promise<Person> => {
  // TODO: implement hashing for the password property.
  const newPerson = new Person(person.username, person.password);
  newPerson.createdAt = new Date();

  try {
    await personRepository.save(newPerson);
  } catch (err: unknown) {
    console.error(err);
  }

  return newPerson;
};

const findPersonById = async (personId: number): Promise<Person | null> => {
  const result = await personRepository.findOneBy({ id: personId });
  return result;
};

const editPerson = async (person: Person): Promise<Person | null> => {
  const personToUpdate = await personRepository.findOneBy({ id: person.id });

  if (personToUpdate === null) return null;

  personToUpdate.firstName = person.firstName;
  personToUpdate.middleName = person.middleName;
  personToUpdate.lastName = person.lastName;
  personToUpdate.age = person.age;
  personToUpdate.phone = person.phone;
  personToUpdate.updatedAt = new Date();

  try {
    await personRepository.save(personToUpdate);
  } catch (err: unknown) {
    console.error(err);
  }

  return personToUpdate;
};

const removePerson = async (
  personId: number
): Promise<{ isDeleted: boolean }> => {
  const personToRemove = await personRepository.findOneBy({
    id: personId,
  });

  if (personToRemove === null) return { isDeleted: false };

  try {
    await personRepository.remove(personToRemove);
  } catch (err: unknown) {
    console.error(err);
  }

  return { isDeleted: true };
};

export {
  findPersons,
  addPerson,
  findPersonById,
  editPerson,
  removePerson,
  authenticatePerson,
};
