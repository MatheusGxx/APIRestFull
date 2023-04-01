const express = require('express')
const cors = require('cors')

const db = require('./BancodeDados/database')
const routes = require('./routes/routes')
const app = express()



// Habilita o Server para receber dados no formato JSON
app.use(express.json())

// Ligando o banco de dados
db.connect()

//Habilitando CORS
const origincors = [
    'http://127.0.0.1:5500',
    
]


// CONCEITO DE CORS = CORS É O O CONCEITO DE QUEM VAI PODER ACESSAR SUA API, SE SUA API VAI SER PUBLICA OU SE SUA API VAI SER UMA API PRIVADA QUE SOMENTE O SEU SERVIÇO PODERA ACESSAR ELA.
app.use(cors({ // Mostrando quem pode acessar a API e quem nao pode
    origin: function (origin, callback ){
        let allowed = true

        if(!origin) allowed = true

        if(!origincors.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

//Criando as Rotas
app.use('/api',routes)


const port = process.env.PORT  || 8080
app.listen(port, () =>  console.log(`O servidor esta escutando e aberto na porta ${port}`))