const express = required('express');
const mysql = require('mysql');

const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user:"root"
    password:"",
    database:"db"
})

app.get("/student", (req,res) => {
    const sql = "SELECT * FROM stuent";
    db.query(sql,(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(3306,() -> {
    console.log("listening...");
})