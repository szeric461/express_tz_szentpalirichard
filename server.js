const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: "",
    database: "fogado"
})

app.get("/", (req, res) => {
    res.send("Fut a backend.");
});

app.get("/szobak", (req, res) => {
    const sql = "SELECT * FROM szobak";
    db.query(sql, (err, result) => {
        res.json(result);
    });
});

app.listen(3001, () => {
    console.log("Szerver a 3001-es porton fut.");
});