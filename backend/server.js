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
});


app.post("/Register", (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Password = req.body.Password;

    const insertSql = "INSERT INTO Users (FName, LName, Email, UserPassword) VALUES (?, ?, ?, ?)";

    db.query(insertSql, [FirstName, LastName, Email, Password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Registration Successful");
            console.log(FirstName);
            console.log(LastName);
            console.log(Email);
            console.log(Password);

        }
    });
});


app.post('/Login', (req, res) => {
    const Email = req.body.Email;
    const Password = req.body.Password;
    
    db.query(
        "SELECT * FROM Users WHERE Email = ? AND UserPassword = ?",
        [Email, Password],
        (err, result) => {
            if (err) {
                res.send({err: err})

            } if(result.length > 0) {
                res.send(result);
                console.log("Successful");

                console.log(Email);
                console.log(Password);
            } 
            else {
                console.log("Not successful");

            }
        }
    );
});



app.listen(3001, () => {
    console.log("listening");
})