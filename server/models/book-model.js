const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: String,
  author: String,
  pages: Number,
  year: Number,
  country: String,
  language: String,
  link: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("booksCollection", Book);
