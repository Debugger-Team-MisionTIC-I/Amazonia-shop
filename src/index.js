const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 3000)

//setings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use(require('.routes/task.routers'))

//static files


//starting the server

app.listen(3000, () => {
    console.log('Servidor conectado en puerto 3000')
})