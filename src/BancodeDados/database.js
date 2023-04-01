const mongoose = require('mongoose')


function connect(){
    mongoose.connect('mongodb://localhost:27017/api-restfull')

    const db = mongoose.connection

    db.once('open',() => {
        console.log('Banco de dados conectado')
    })

    db.on('error', console.error.bind(console, 'Conexao com o banco de dados deu erro:'))
}

module.exports = {
    connect
}
