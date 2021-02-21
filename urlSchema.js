const bookshelf = require("bookshelf")
const Schema = bookshelf.Schema

const urlSchema = new Schema({
    _id: {
        type:  bookshelf.Schema.Types.ObjectId, 
        auto: true,
        required: true
    },
    acccessUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    accessValidity: {
        type: String,
        required: true,
    }
})


const url = bookshelf.model('wisereducacao', urlSchema)

module.exports = url;
