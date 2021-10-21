const express = require('express')
const BookRouter = express.Router()
const Book = require("../models/Book")

BookRouter.route('/').get(async (req, res) => {
    const books = await Book.find()
    res.json({ status: 200, books })
})

BookRouter.route('/:id').get((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) throw err;
        res.json({ status: 200, book })
    })
})

BookRouter.route('/').post((req, res) => {
    Book.findOne({ name: req.body.name, done: false }, (err, book) => { //중복체크
        if (err) throw err;
        if (!book) {
            const newBook = new Book(req.body);
            newBook.save().then(() => {
                res.json({ status: 201, msg: 'new todo created in db !', newBook })
            })
        } else {
            const msg = 'this book already exists in db !'
            console.log(msg)
            res.json({ status: 204, msg })
        }
    })
})

BookRouter.route('/:id').put((req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
        if (err) throw err;
        res.json({ status: 204, mag: `book ${req.params.id} updated db !`, book })
    })
})

BookRouter.route('/:id').delete((req, res) => {
    Book.findByIdAndRemove(req.params.id, (err, book) => {
        if (err) throw err;
        res.json({
            status: 204, msg: `todo ${req.params.id} removed in db !`
        })
    })
})

module.exports = BookRouter