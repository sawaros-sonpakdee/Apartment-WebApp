const express = require('express')
const router = express.Router()
const con = require('../db_connect')

router.post('/loginUser', (req, res) => {
    // console.log('This is a test message from server!')
    const req_data = req.body;
    const condition1 = req_data.username;
    const condition2 = req_data.password;

    console.log("con1 : ",condition1);
    console.log("con2 : ",condition2);

    // res.json(column);
    const sql = 'SELECT * FROM `user` WHERE username = ? AND password = ?';
    con.query(sql,  [condition1, condition2] ,(error, results, fields) => {
        if (error ) {
            console.error('Error inserting data: ' + error);
            res.status(500).send('Error executing query');
            return;
        }else{
        
            if (results.length === 0) {
                console.log('No matching records found.');
              } else { 
                res.json(results);
                console.log("lenght : ",results.length);
                console.log('Query results:', results);
              }
        }
       
    })
})

router.get('/', (req, res) => {
    console.log('Success')
})

module.exports = router
