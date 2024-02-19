import { v4 as uuid } from "uuid";
//the uuid package, which is specifically designed for creating completely unique identifiers.
import bookData from "../../data/books.json" assert { type: "json" };

const createBook = (title, author, isbn, pages, available, genre) => {
  throw new Error("Not implemented!");
  const newBook = {
    id: uuid(),
    title,
    author,
    isbn,
    pages,
    available,
    genre,
  };

  bookData.books.push(newBook);
  //await createNewBookInDatabase(newBook);
  return newBook;
};

export default createBook;
