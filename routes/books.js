import express from "express";
import getBooks from "../services/books/getBooks.js";
import createBook from "../services/books/createBook.js";
import getBookById from "../services/books/getBookById.js";
import updateBookById from "../services/books/updateBookById.js";
import deleteBook from "../services/books/deleteBook.js";
import authMiddleware from "../middleware/auth.js";

// we need to add the middleware to the routes we want to secure.
//To do this, we have to make some changes in routes/books.js and routes/records.js. First,

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { genre, available } = req.query;
    const books = await getBooks(genre, available);
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting list of books!");
  }
});

router.post("/", authMiddleware, async (req, res) => {
  // try {
  const { title, author, isbn, pages, available, genre } = req.body;
  const newBook = await createBook(
    title,
    author,
    isbn,
    pages,
    available,
    genre
  );
  res.status(201).json(newBook);
  // } catch (error) {
  //   console.error(error);
  //  res.status(500).send("Something went wrong while creating new book!");
  // }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookById(id);

    if (!book) {
      res.status(404).send(`Book with id ${id} was not found!`);
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting book by id!");
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, isbn, pages, available, genre } = req.body;
    const updatedBook = await updateBookById(
      id,
      title,
      author,
      isbn,
      pages,
      available,
      genre
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while updating book by id!");
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookId = await deleteBook(id);

    if (!deletedBookId) {
      res.status(404).send(`Book with id ${id} was not found!`);
    } else {
      res.status(200).json({
        message: `Book with id ${deletedBookId} was deleted!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while deleting book by id!");
  }
});

export default router;
