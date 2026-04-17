const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Anslut till databasen
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false,
    },
});

// Validerar
client.connect((err)=>{
    if(err){
        console.log(`Connection error: ${err}`);
    } else {
        console.log(`Connected to database!`);
    }
});

app.use(cors());
app.use(express.json());

// Routes --------------------------->

// GET all workexperiences
app.get("/api/workexperience", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM workexperience");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// POST new work experience
app.post("/api/workexperience", async (req, res) => {
    const { companyname, jobtitle, location, startdate, enddate, description } = req.body;

    try {
        const sql = `
        INSERT INTO workexperience (companyname, jobtitle, location, startdate, enddate, description)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id
        `;

        const result = await client.query(sql, [
            companyname, jobtitle, location, startdate, enddate, description
        ]);

        res.json({ message: "Work experience added", id: result.rows[0].id });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



//PUT update work experience
app.put("/api/workexperience/:id", async (req, res) =>{
    const id = req.params.id;
    const { companyname, jobtitle, location, startdate, enddate, description } = req.body;

    try {
        const sql = `
        UPDATE workexperience
        SET companyname=$1, jobtitle=$2, location=$3, startdate=$4, enddate=$5, description=$6
        WHERE id=$7
        `;

        await client.query(sql, [
        companyname, jobtitle, location, startdate, enddate, description, id
        ]);

        res.json({ message: "Work experience updated", id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE 
app.delete("/api/workexperience/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await client.query("DELETE FROM workexperience WHERE id=$1", [id]);
        res.json({ message: "Work experience deleted", id });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});











// Startar server ---------------------->
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});