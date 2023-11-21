const Book = require("../models/book");

exports.getAllBooks = ( req, res ) => {
    res.json(Book.getAllBooks());
}

exports.getBookById = ( req, res ) => {
    res.json(Book.getBookById(req.params.id));
}

exports.saveBook = ( req, res ) => {
    const {title, isbn, publishedDate, author } = req.body;
    new Book(null, title, isbn, publishedDate, author).save();
    res.status(201).end();
}

exports.updateBook = ( req, res ) => {
    const {title, isbn, publishedDate, author } = req.body;
    const book = new Book(null, title, isbn, publishedDate, author);
    book.id = req.params.id;
    book.updateById(req.params.id);
    res.status(200).end();
}

exports.deleteBook = ( req, res ) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}