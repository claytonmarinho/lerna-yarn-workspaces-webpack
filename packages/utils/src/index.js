import faker from "faker";

const generateRandomProfile = () => {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const card = faker.helpers.createCard();

  return {
    name,
    email,
    card,
  };
};

export { generateRandomProfile };
