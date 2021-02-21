const Bookshelf = require("bookshelf")
const bookshelf = require("bookshelf")
const DB_URL = "postgreSQL://localhost:8081/wisereducacao"

const connect = ()=>{
    bookshelf.connect(DB_URL, { useUnifiedTopology: true })
    const connection = bookshelf.connection
    connection.on('error', () => console.error('Error connected'))
    connection.once('open',  () => console.log('Connect in the PostgreSQL'))
}

module.exports = { connect }

//arquivo Repository CRIA a Conexão com o Banco de Dados, nesse caso o PostgreSQL