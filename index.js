const express = require('express')
const app = express()
require('dotenv').config()


const port = process.env.PORT 

// routers
const driverRouter = require('./router/driver-router')

app.use(express.json())
app.use('/api/drivers', driverRouter)

app.listen(port, ()=>{
    console.log('port runs on ',port);
})