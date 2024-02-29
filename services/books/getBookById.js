// import bookData from '../../data/books.json' assert { type: 'json' }
import { PrismaClient } from "@prisma/client";

const getBookById = async (id) => {
  const prisma = new PrismaClient();
  // return bookData.books.find((book) => book.id === id);
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return book;
};

export default getBookById;
