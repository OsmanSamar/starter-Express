import { v4 as uuid } from "uuid";
import userData from "../../data/users.json" assert { type: "json" };

const createUser = (username, name, password, image) => {
  const newUser = {
    id: uuid(),
    name,
    username,
    password,
    image,
  };

  userData.users.push(newUser);

  return newUser;
};

export default createUser;
