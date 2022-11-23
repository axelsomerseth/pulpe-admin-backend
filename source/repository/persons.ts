import { Person } from "../db/entities/persons";
import { AppDataSource } from "../db/connection";
import { hash } from "../utils/auth";

const personRepository = AppDataSource.getRepository(Person);

const authenticatePerson = async (person: Person): Promise<Person | null> => {
  const authenticatedPerson = await personRepository.findOneBy({
    username: person.username,
    password: hash(person.password),
  });

  if (!authenticatedPerson) return null;

  return authenticatedPerson;
};

const findPersons = async (): Promise<Person[]> => {
  const results = await personRepository.find();
  return results;
};

const addPerson = async (person: Person): Promise<Person | null> => {
  const newPerson = new Person(person.username, hash(person.password));
  newPerson.createdAt = new Date();

  try {
    await personRepository.save(newPerson);
  } catch (err: unknown) {
    console.error(err);
    return null;
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
  personToUpdate.email = person.email;
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
