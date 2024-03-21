const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'ap_management'
})

con.connect((err)=>{
    if(err){
       console.error('Error connection to MySql',err)
       return;
    }
    console.log("Connected to Mysql!")
})
module.exports = con;