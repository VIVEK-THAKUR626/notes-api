const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

app.get("/",(req,res) => {
    res.send("Server is working");
})

app.get("/notes/:id", (req,res) => {
    const id = Number(req.params.id);

    const note = notes.find(note => note.id === id);

    res.json(note);
})

app.get("/notes", (req,res) => {
    res.json(notes);
})

app.post("/notes", (req,res) => {
    const note = {
        id : notes.length + 1,
        title : req.body.title,
        content : req.body.content
    };

    notes.push(note);

    res.json(notes);
})

app.listen(3000,() => {
    console.log("Server running on http://localhost:3000");
})