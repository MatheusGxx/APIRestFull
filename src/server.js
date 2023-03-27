const express = require('express')

const db = require('./BancodeDados/database')
const routes = require('./routes/routes')
const app = express()



//Habilita o server para receber dados via post ( Formulario )
app.use(express.urlencoded({extended: true}))

db.connect()

app.use('/api',routes)


const port = process.env.PORT  || 8080
app.listen(port, () =>  console.log(`O servidor esta escutando e aberto na porta ${port}`))