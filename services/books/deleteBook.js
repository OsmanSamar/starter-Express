// import bookData from '../../data/books.json' assert { type: 'json' }

// const deleteBook = (id) => {
//   const index = bookData.books.findIndex((book) => book.id === id)

//   if (index === -1) {
//     return null
//   }

//   bookData.books.splice(index, 1)
//   return id
// }

// export default deleteBook

import { PrismaClient } from "@prisma/client";
// import NotFoundError from "../../errors/NotFoundError.js";

const deleteBook = async (id) => {
  const prisma = new PrismaClient();

  const deleteBook = await prisma.book.deleteMany({
    where: {
      id,
    },
  });

  if (!deleteBook || deleteBook.count === 0) {
    // throw new NotFoundError("Book", id);
    throw new Error("Book", id);
  }

  return id;
};
export default deleteBook;
