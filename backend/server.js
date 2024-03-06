const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: "localhost",
    password: 'vietnam',
    database: 'To_Alan_db'
})

app.post("/register", (req, res) => {
    db.query("INSERT INTO Users (UserID, FName, LName, Email, UserPassword) VALUES (?, ?, ?, ?, ?)", 
    [UserId, FirstName, LastName, Email, Password], (err, result) => {
        console.log(err);
    }
);

// POST request to users extracting email and password
app.post('/login', (req, res) => {
    {/* Query made to select data from "Users" table */ }



    const sql = "SELECT * FROM Users WHERE Email = ? AND UserPassword = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Login Failed");
        if (data.length > 0) {
            console.log("Login Successful");
            return res.json(data);
        } else {
            return res.json("No Record")
        }
    })
})

app.listen(8081, () => {
    console.log("listening");
})