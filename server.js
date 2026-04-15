const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// Validering för anslutning
connection.connect((err) =>{
    if (err) {
        console.error("Connection to database failed: " + err);
        return;
    } 
    console.log("Connected to MySQL database!");
});

app.use(cors());
app.use(express.json());

// Routes
app.get("/api/workexperience", (req, res) => {

    // Get workexperiences
    connection.query("SELECT * FROM workexperience", (err, results) => {
        if(err) return res.status(500).json({ error: err });
        res.json(results);
    });
});













// Startar server
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});