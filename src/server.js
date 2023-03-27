const express = require('express')

const db = require('./BancodeDados/database')
const routes = require('./routes/routes')
const app = express()



// Habilita o Server para receber dados no formato JSON
app.use(express.json())

db.connect()

app.use('/api',routes)


const port = process.env.PORT  || 8080
app.listen(port, () =>  console.log(`O servidor esta escutando e aberto na porta ${port}`))