const bookRouter = require("express").Router();
const bookCtrl = require("../controllers/books-ctrl");

bookRouter.get("/",bookCtrl.getAllBooks)
bookRouter.get("/id/:id",bookCtrl.getBooksById)
bookRouter.post("/add",bookCtrl.addNewBook)
bookRouter.delete("/delete/:id",bookCtrl.deleteBookById)

module.exports = bookRouter;
