const Books = require("../models/library");

exports.postBook = async (req, res) => {
    try {
        const title = req.body.title;
        const issueDate = req.body.issueDate;
        const returnDate = req.body.returnDate;
        const returnBook = req.body.returnBook;
        const fine = req.body.fine;
        let book = await Books.create({
            title,
            issueDate,
            returnDate,
            returnBook,
            fine
        })
        res.status(201).json({
            book: book
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getBooks = async (req, res) => {
    try {
        let books = await Books.findAll();
        res.status(200).json({
            books
        })
    } catch (error) {
        console.log(error);
    }
}