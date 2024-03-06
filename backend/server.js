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

// app.post("/register", (req, res) => {
//     db.query("INSERT INTO Users (UserID, FName, LName, Email, UserPassword) VALUES (?, ?, ?, ?, ?)", 
//     [UserId, FirstName, LastName, Email, Password], (err, result) => {
//         console.log(err);
//     }
// );

// // POST request to users extracting email and password
// app.post('/login', (req, res) => {
//     {/* Query made to select data from "Users" table */ }



//     const sql = "SELECT * FROM Users WHERE Email = ? AND UserPassword = ?";

//     db.query(sql, [req.body.email, req.body.password], (err, data) => {
//         if (err) return res.json("Login Failed");
//         if (data.length > 0) {
//             console.log("Login Successful");
//             return res.json(data);
//         } else {
//             return res.json("No Record")
//         }
//     })
// })

//SELECT * FROM Movie WHERE 

// app.get('/Home', async(req, res) => {
//     const MovieInput = req.body.MovieReg;
//     const sql = "SELECT * FROM Movie WHERE Title = ?"
//     db.query(qry, [MovieInput], (err, result) => {
//         db.end();
//         if (err) throw err;
        
//         if (result) {
//             console.log("it connected!");
//             res.send({result});
//         }
//     })
// });

app.post('/Contact', async (req, res) => {
    const searchTerm = req.query.movieReg;

    const querySQL = "SELECT * FROM Movie WHERE Title = ?";
    db.query(querySQL, [searchTerm], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("connected!");
        console.log(searchTerm);
      }
    })
  });

// db.query('select * from To_Alan_db.Movie', (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     } 
//     return console.log(result);
//     db.end();
// })


db.end();


app.listen(8081, () => {
    console.log("listening");
})