const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

app.get("/",(req,res) => {
    res.send("Server is working");
})

app.get("/notes", (req,res) => {
    res.json(notes);
})

app.post("/notes", (req,res) => {
    const note = req.body;

    notes.push(note);

    res.json(notes);
})

app.listen(3000,() => {
    console.log("Server running on http://localhost:3000");
})