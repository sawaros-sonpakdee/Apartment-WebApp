const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/router')
const con = require('./db_connect')
const port =  4000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions ={
    origin : '*',
    credential: 'true',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/',router)


const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});