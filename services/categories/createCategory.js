import { v4 as uuid } from "uuid";
import categoryData from "../../data/categories.json" assert { type: "json" };
//the uuid package, which is specifically designed for creating completely unique identifiers.

const createCategory = (name) => {
  const newCategory = {
    id: uuid(),
    name,
  };

  categoryData.categories.push(newCategory);

  return newCategory;
};

export default createCategory;
