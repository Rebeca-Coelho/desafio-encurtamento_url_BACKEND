const express = require("express")
const cors = require('express')
const app = express()
const bookshelf = require('bookshelf')
const dotenv = require('dotenv')

dotenv.config();

bookshelf.connect(`$ {process.env.DATABASE}`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const index = require("./route/index")
const url  = require("./route/urlRoute")

app.use(express.json());
app.use(cors())

app.use("/", index)
app.use("/wisereducacao", wisereducacao)

module.exports = app
