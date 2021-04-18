const bookModel = require("../models/book-model");

const getAllBooks = (req, res) => {
  bookModel.find({}, (err, results) => {
    if (err) throw err;
    if (!results.length)
      res.status(201).json({ success: true, message: "No Books", data: [] });
    if (results.length) res.status(200).json({ success: true, data: results });
  });
};
const getBooksById = (req, res) => {
  const bookId = req.params.id;
  res.status(200).json({ success: true, data: bookId });
};
const addNewBook = (req, res) => {
  console.log(req.body);
  const newBook = req.body.book;
  console.log(newBook);
  bookModel.insertMany(newBook, (err) => {
    if (err) throw err;
    res
      .status(200)
      .json({ success: true, message: "Book Added", data: newBook });
  });
};
const deleteBookById = (req, res) => {
  const bookId = req.params.id;
  console.log(bookId);
  bookModel.findByIdAndRemove(bookId, (err, result) => {
    if (err) throw err;;
    res
      .status(200)
      .json({ success: true, message: "book deleted", data: result });
  });
};

module.exports = {
  getAllBooks,
  getBooksById,
  addNewBook,
  deleteBookById,
};
