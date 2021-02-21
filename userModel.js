const Bookshelf = require('bookshelf')
const bookshelf = require('bookshelf')

const userSchema = new bookshelf.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: Number, required: true },
    name: { type: String, required: true }
}, { timestamps: true })

const user = bookshelf.model('user', userSchema)

module.exports = user