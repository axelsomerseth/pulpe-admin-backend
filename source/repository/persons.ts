import { Person } from "../db/entities/persons";
import { AppDataSource } from "../db/connection";

const personRepository = AppDataSource.getRepository(Person);

const findPersons = async (): Promise<Person[]> => {
  const results = await personRepository.find();
  return results;
};

const addPerson = async (person: Person): Promise<Person> => {
  // TODO: implement hashing for the password property.
  const newPerson = new Person(person.email, person.password);
  newPerson.createdAt = new Date();
  await personRepository.save(newPerson);
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

  await personRepository.save(personToUpdate);
  return personToUpdate;
};

const removePerson = async (
  personId: number
): Promise<{ isDeleted: boolean }> => {
  const personToRemove = await personRepository.findOneBy({
    id: personId,
  });

  if (personToRemove === null) return { isDeleted: false };

  await personRepository.remove(personToRemove);
  return { isDeleted: true };
};

export { findPersons, addPerson, findPersonById, editPerson, removePerson };
