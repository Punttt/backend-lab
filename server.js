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

// Routes --------------------------->


// GET all workexperiences
app.get("/api/workexperience", (req, res) => {

    connection.query("SELECT * FROM workexperience", (err, results) => {
        if(err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// POST new work experience
app.post("/api/workexperience", (req, res) => {
    const { companyname, jobtitle, location, startdate, enddate, description } = req.body;

    // Validation
    if ( !companyname || !jobtitle || !location || !startdate || !enddate || !description ){
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    
});













// Startar server
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});