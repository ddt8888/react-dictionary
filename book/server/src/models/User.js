const mongoose = require('mongoose')
const book = require('./Book')

const bookSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, default: 0 },
    email: { type: String, required: true, trim: true },
    books: [book]
})