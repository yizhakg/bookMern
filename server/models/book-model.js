const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  name: String,
  pages: Number,
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("booksCollection", Book);
