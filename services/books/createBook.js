// import bookData from "../../data/books.json" assert { type: "json" };
// import { v4 as uuid } from "uuid";
//the uuid package, which is specifically designed for creating completely unique identifiers.

import { PrismaClient } from "@prisma/client";

const createBook = async (title, author, isbn, pages, available, genre) => {
  // throw new Error("Not implemented!");
  // const newBook = {
  //   id: uuid(),
  //   title,
  //   author,
  //   isbn,
  //   pages,
  //   available,
  //   genre,
  // };

  // bookData.books.push(newBook);
  //await createNewBookInDatabase(newBook);
  // return newBook;

  const prisma = new PrismaClient();
  return prisma.book.create({
    data: {
      title,
      author,
      isbn,
      pages,
      available,
      genre,
    },
  });
};

export default createBook;

//NOTE
//We haven’t recreated the uuid() generation as that’s something our
//Prisma Model should take care of (remember,
//we marked the ID field with @default(uuid()) directive). Also,
//we used a very convenient create function from Prisma Client.
