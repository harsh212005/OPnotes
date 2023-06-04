const express = require("express");
// const notes = require("./ata1/notes");
const notes = require("./Data1/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config();

app.get('/',(req,res)=>{
    res.send("api is running");
});
connectDB();


app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n) => n._id === req.params.id);
    res.json(note);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log("server started on port 5000"));
 