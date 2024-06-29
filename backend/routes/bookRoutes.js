import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//Make a post request for making a book document
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({ message: "Send all required fields" });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Get request to get a single book by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const books = await Book.findById(id);
    return response.status(200).json(books);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

//Make a get request to get all the books(documents)
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Put request to update a book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).json({ message: "Please send all fields" });
    }
    const { id } = request.params;
    const newBook = await Book.findByIdAndUpdate(id, request.body);

    if (!newBook) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).json({
      message: "Book has been successfully updated",
      newBook: newBook,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Delete request to delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return response.status(404).json({ message: "Book not found!" });
    }
    return response
      .status(200)
      .json({ message: "Book was deleted successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error.message });
  }
});

export default router;

