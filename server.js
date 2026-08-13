const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("../frontended"));

const PORT = 3000;

// Connect to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:  "YOUR_PASSWORD",
    database: "portfolio_db"
});

// Check MySQL connection
db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:", err.message);
    } else {
        console.log("MySQL connected successfully!");
    }
});

// Home route - opens the portfolio
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "../frontended" });
});

// Get all projects
app.get("/api/projects", (req, res) => {
    const sql = "SELECT * FROM projects";

    db.query(sql, (err, results) => {
        if (err) {
            console.log("Database error:", err.message);
            res.status(500).json({ error: err.message });
            return;
        }

        res.json(results);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});